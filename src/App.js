import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Myform from "./Components/MyForm";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#4b4c50";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route
              path="/"
              element={
                <Myform
                  showAlert={showAlert}
                  heading="Try TextUtils- Word Counter, Character Counter, Replace Word"
                  mode={mode}
                />
              }
            />
            <Route
              path="/about"
              element={<About showAlert={showAlert} mode={mode} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
