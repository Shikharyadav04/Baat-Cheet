import React from "react";

const SelectGender = ({ selectedGender, ChangeGender }) => {
  return (
    <div>
      <fieldset className="fieldset bg-base-100 border-base-300 flex justify-around rounded-box  border p-2">
        <legend className="fieldset-legend">Your Gender</legend>
        <label className="label">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => {
              ChangeGender(selectedGender === "male" ? "" : "male");
            }}
            checked={selectedGender === "male"}
          />
          <span className="text-green-500 font-bold">Male</span>
        </label>
        <label className="label">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() =>
              ChangeGender(selectedGender === "female" ? "" : "female")
            }
            checked={selectedGender === "female"}
          />
          <span className="text-pink-500 font-bold">Female</span>
        </label>
      </fieldset>
    </div>
  );
};

export default SelectGender;
