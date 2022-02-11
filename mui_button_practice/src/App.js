import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React, { useState } from "react";

function App() {
const [open, setOpen] = useState(false);
  return (
    <div>
      <ButtonGroup>
        <Button variant="outlined" onClick={() => {setOpen(true);}}>create</Button>
        <Button variant="outlined">update</Button>
      </ButtonGroup>
      <Button variant="outlined">delete</Button>

      <Dialog open={open}>
        <DialogTitle>I'm DialogTitle</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello World!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => {setOpen(true);}}>create</Button>
          <Button variant="outlined" onClick={() => {setOpen(false);}}>cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;