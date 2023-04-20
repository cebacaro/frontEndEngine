import React, { useState } from "react";

const Main = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex w-full justify-center  items-end ">
      {" "}
      <form className="w-[40vw]  mb-[50px] ">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          cols="30"
          rows="1"
          placeholder="Send a message..."
          className="bg-[#40414f] border-none w-[100%] text-left rounded-md  outline-none shadow-md p-[12px] text-white "
        ></input>
      </form>
    </div>
  );
};

export default Main;
