import "../index.css";
import React, { useEffect, useState } from "react";
import { PickerOverlay } from "filestack-react";

function Loader() {
  const [showPicker, setShowPicker] = useState(false);
  const [uploadHistory, setUploadHistory] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("uploadHistory")) || [];
    setUploadHistory(history);
  }, []);

  function handleClick() {
    setShowPicker((prevState) => !prevState);
  }
  function handleUploadDone(res) {
    const updatedHistory = [...uploadHistory];
    res.filesUploaded.map((file) => {
      const newUpload = {
        handle: file.handle,
        fileName: file.filename,
      };
      updatedHistory.push(newUpload);
    });
    localStorage.setItem("uploadHistory", JSON.stringify(updatedHistory));
    setUploadHistory(updatedHistory);
    setShowPicker(false);
  }

  function handleDelete(handle) {
    const updatedHistory = uploadHistory.filter(
      (upload) => upload.handle !== handle
    );
    localStorage.setItem("uploadHistory", JSON.stringify(updatedHistory));
    setUploadHistory(updatedHistory);
  }

  return (
    <div
      className=" bg-gray-800 h-[100vh] flex flex-col 
    "
    >
      <div className="border-white border flex flex-col rounded-lg w-[40vw] h-full ">
        <h1
          className="text-center text-white p-10 text-[60px]
      "
        >
          File Uploader
        </h1>
        <p
          className="text-center text-white text-[30px]
      "
        >
          Upload your file here
        </p>
        <button
          onClick={handleClick}
          className="text-center text-white text-[20px]  bg-slate-400 self-center rounded-lg p-2 mt-7
      "
        >
          Upload
        </button>
        <div className="flex flex-col items-center bg-white w-[37vw] mx-auto rounded-md mt-10 ">
          <h3 className="text-xl border-b-4 border-b-black">Upload History:</h3>
          {uploadHistory.length === 0 && <p>No File have been Uploaded yet</p>}
          <ul>
            {uploadHistory.map((upload) => (
              <li key={upload.handle}>
                <span>{upload.fileName}</span>
                <button
                  className="bg-cyan-500 rounded-md p-1 m-1"
                  onClick={() =>
                    window.open(
                      `https://cdn.filestackcontent.com/${upload.handle}`
                    )
                  }
                >
                  View
                </button>
                <button
                  className="bg-red-500 rounded-md p-1 m-1"
                  onClick={() => handleDelete(upload.handle)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        {showPicker && (
          <PickerOverlay
            apikey={"AlcXNPs3RQSmWBKVRTm1Mz"}
            onUploadDone={(res) => handleUploadDone(res)}
          />
        )}
      </div>
    </div>
  );
}

export default Loader;
