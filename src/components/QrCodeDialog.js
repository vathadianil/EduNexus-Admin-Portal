import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

function QrCodeDialog({ handleClose, open, image }) {
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth={true}>
      <DialogTitle>QR Code </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        {image ? (
          <img src={image} alt="QR Code" />
        ) : (
          <Typography sx={{ textAlign: "center" }} variant="subtitle1">
            No QR Found
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default QrCodeDialog;
