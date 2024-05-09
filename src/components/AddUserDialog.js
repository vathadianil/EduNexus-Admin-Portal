import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import AddUserForm from "./AddUserForm";

function AddUserDialog({ handleClose, open }) {
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth={true}>
      <DialogTitle>Add User </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        <AddUserForm />
      </DialogContent>
    </Dialog>
  );
}

export default AddUserDialog;
