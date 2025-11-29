import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

import { toast } from "react-toastify";

const Todolist = () => {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!userName) {
      toast.error("Please enter a task");
      return;
    }
    if (!editId) {
      const newItem = { _id: Date.now(), name: userName };
      // console.log(newItem);
      setData([...data, newItem]);
      toast.success("Task added successfully");
    } else {
      const updateItem = data.map((itm) =>
        itm._id === editId._id ? { ...itm, name: userName } : itm
      );
      // console.log(updateItem);
      setData(updateItem);
      toast.success("Task Update successfully");
    }
    setUserName("");
    setEditId(null);
  };

  const handleEdit = (_id) => {
    const editItem = data.find((itm) => itm._id === _id);
    // console.log(editItem, "This is editId");
    setUserName(editItem.name);
    setEditId(editItem);
  };

  const handleDelete = (_id) => {
    const deleteItem = data.filter((itm) => itm._id !== _id);
    // console.log(deleteItem);
    setData(deleteItem);
    toast.success("Task deleted successfully");
  };

  const handleClearAll = () => {
    setData([]);
    toast.success("Task clear all successfully");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // console.log("Enter");
      handleSubmit();
    }
  };

  return (
    <div className="px-5 md:px-20">
      <div className=" flex-col  px-4 md:flex md:flex-row justify-center gap-3 mt-[5%]">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-3 items-center max-w-lg mx-auto">
          <input
            type="text"
            name="userName"
            value={userName}
            className="w-full md:flex-1 rounded-md px-4 py-2 border border-gray-300 text-sm md:text-base outline-none"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter your task..."
          />
          <button
            onClick={handleSubmit}
            className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-2 rounded-md text-sm md:text-base"
          >
            {editId ? "Update Task" : "Add Task"}
          </button>
        </div>
      </div>
      <div className=" flex justify-between p-3 mt-5">
        <p className="font-bold flex gap-3 md:gap-2 text-[#a9bae6] text-xs md:text-lg">
          ToDo
          <p className="mb-3 bg-orange-200 text-white font-semibold rounded-full  px-3 py-1 md:rounded-2xl md:px-3 md:py-1 text-xs md:text-sm text-center">
            {data.length}
          </p>
        </p>
        <button
          className="bg-[#a9bae6] mb-3 px-2 py-1 md:px-4 md:py-2 rounded-md text-[10px] md:text-sm text-black font-medium"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
      <hr />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-5 h-auto   bg-white rounded-md p-3 cursor-pointer  w-full ">
        {data?.map((itm, i) => (
          <div
            className=" flex justify-between border border-black h-[70px]  md:h-[100px]  px-4  rounded-md bg-blue-50 hover:bg-orange-50"
            key={i}
          >
            <p className=" text-center items-center mt-5">{itm.name}</p>
            <div className=" flex gap-2 mt-5">
              <FaRegEdit
                fontSize={20}
                onClick={() => handleEdit(itm._id)}
                className=" cursor-pointer"
              />
              <MdDeleteOutline
                fontSize={20}
                onClick={() => handleDelete(itm._id)}
                className=" cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
