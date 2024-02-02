import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ file, pageNumber, highlightText }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Custom rendering of text layer to include highlighting
  const renderTextLayer = (textItems) => {
    return textItems.map((textItem, index) => {
      let spans = [];
      const { str } = textItem;
      if (highlightText && str.includes(highlightText)) {
        const parts = str.split(highlightText);
        spans.push(<span key={`pre-${index}`}>{parts[0]}</span>);
        spans.push(
          <mark
            key={`mark-${index}`}
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            {highlightText}
          </mark>
        );
        spans.push(<span key={`post-${index}`}>{parts[1]}</span>);
      } else {
        spans.push(<span key={index}>{str}</span>);
      }
      return (
        <div
          key={`textItem-${index}`}
          style={{
            transform: `translate(${textItem.transform[4]}px, ${textItem.transform[5]}px)`,
          }}
        >
          {spans}
        </div>
      );
    });
  };

  return (
    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          renderTextLayer={renderTextLayer}
        />
      ))}
    </Document>
  );
};

export default PdfViewer;
