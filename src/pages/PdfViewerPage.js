import React, { useState, useEffect } from "react";
import PdfViewer from "./PdfViewer"; // Import the PdfViewer component

const PdfViewerPage = () => {
  const [highlight, setHighlight] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  // Simulated API response
  const apiResponse = {
    page_number: 0,
    position: 0,
    text: "Overview\nof\nAbichat's\nPurpose\nAbichat\nis\ndesigned\nto...",
    // ... rest of the response
  };

  // Function to handle the response and update the highlight state
  const handleApiResponse = (response) => {
    const { text, page_number } = response;
    setHighlight({
      text: text.replace(/\n/g, " "), // Replace newline characters with spaces
      pageNumber: page_number + 1, // pdf.js uses 1-indexed page numbers
    });
  };

  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please select a PDF file.");
    }
  };

  // Simulate receiving the API response
  useEffect(() => {
    handleApiResponse(apiResponse);
  }, []);

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileSelect} />
      {pdfFile && (
        <PdfViewer
          file={pdfFile}
          pageNumber={highlight?.pageNumber}
          highlightText={highlight?.text}
        />
      )}
    </div>
  );
};

export default PdfViewerPage;
