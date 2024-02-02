import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@mui/material";

function PdfUploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const user = useSelector((state) => state.user); // Access user data from Redux store

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("user", JSON.stringify(user)); // Pass user info as a JSON string

    axios
      .post("/api/upload-pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("File uploaded successfully", response.data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error uploading file", error);
        // Handle error
      });
  };

  return (
    <div>
      <h1>Upload PDF</h1>
      <input type="file" onChange={handleFileSelect} />
      <Button variant="contained" component="label" sx={{ mt: 2 }}>
        Upload File
        <input type="file" hidden onChange={handleFileSelect} />
      </Button>
      <Button variant="contained" onClick={handleUpload} sx={{ mt: 2 }}>
        Submit
      </Button>
      {/* List of uploaded documents */}
    </div>
  );
}

export default PdfUploadPage;
