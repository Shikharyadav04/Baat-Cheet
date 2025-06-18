import React from "react";

const Coversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center rounded-lg p-2 py-3 mt-1  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-violet-500">
        <div className="avatar avatar-online">
          <div className="rounded-full w-12">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <div className="flex-1 gap-3 justify-start">
          <span className=" font-mono font-extrabold font-manrope leading-snug text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-slate-100 to-blue-200">
            Shikhar Yadav
          </span>
        </div>
      </div>
      {/* <div class="divider mt-0"></div> */}
    </>
  );
};

export default Coversation;
