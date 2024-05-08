import { Box } from "@mui/material";
import { baseURL } from "../utils/axios/axios";
import IconButton from "@mui/material/IconButton";
import { QrCode } from "@mui/icons-material";
import QrCodeDialog from "./QrCodeDialog";
import { useState } from "react";

function DisplayQr({ params }) {
  const { row } = params;
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const handleClickOpen = async () => {
    setOpen(true);
    setImage(`${baseURL}/get-qr-photo/${row?.aID}`);
  };

  const handleClose = () => {
    setOpen(false);
    setImage("");
  };

  return (
    <Box>
      <QrCodeDialog image={image} open={open} handleClose={handleClose} />
      <IconButton
        color="primary"
        aria-label="QR Code"
        onClick={handleClickOpen}
      >
        <QrCode />
      </IconButton>
    </Box>
  );
}

export default DisplayQr;
