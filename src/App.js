import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import TestReduxUsability from "./pages/TestReduxUsability";
import PdfUploadPage from "./pages/PdfUploadPage";
import PdfViewerPage from "./pages/PdfViewerPage";
// ... import other pages ...

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              learnScape
            </Typography>
            <Button
              color="inherit"
              component={Link}
              to="/test-redux"
              sx={{ color: "white" }}
            >
              Test Redux Usability
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/upload-pdf"
              sx={{ color: "white" }}
            >
              Upload PDF
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/pdf-viewer"
              sx={{ color: "white" }}
            >
              Pdf Viewer
            </Button>
            {/* Add more buttons for other links */}
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 3 }}>
          {" "}
          {/* Padding around the page content */}
          <Routes>
            <Route path="/test-redux" element={<TestReduxUsability />} />
            <Route path="/upload-pdf" element={<PdfUploadPage />} />
            <Route path="/pdf-viewer" element={<PdfViewerPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
