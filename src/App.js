import "./App.css";
import * as React from "react";
import { Button, Typography } from "@mui/material";
import { toast } from "react-toastify";

function App() {
  const handleClick = () => {
    toast.success("success message here");
    toast.warn("warning message here");
    toast.error("error goes here");
  };
  return (
    <div className="App">
      <Typography variant="h1">Click Button To See The Magic</Typography>
      <Button variant="primary" onClick={handleClick}>
        Click Here
      </Button>
    </div>
  );
}

export default App;
