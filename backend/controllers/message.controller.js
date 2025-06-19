import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { io, getReceiverSocketId } from "../socket/Socket.js";

const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const { message } = req.body;

    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      });
      // await newConversation.save();
    }

    const newMessage = await Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(200).json(newMessage);

    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
  } catch (error) {
    console.log("Error in message send controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: toChatWithId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      members: { $all: [senderId, toChatWithId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json({ messages });

    // res.status(200).json();
  } catch (error) {
    console.log("Error in getMessage controller : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { sendMessage, getMessages };
