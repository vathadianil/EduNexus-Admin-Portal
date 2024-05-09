import { Box, Fab, Tooltip } from "@mui/material";
import {
  GridToolbarQuickFilter,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddUserDialog from "./AddUserDialog";

export default function CustomToolbar() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = async () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <GridToolbarContainer>
      <AddUserDialog open={open} handleClose={handleClose} />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: "Export data" },
          button: { variant: "outlined" },
        }}
      />
      <Box sx={{ flex: 1 }} />
      <GridToolbarQuickFilter />
      <Tooltip title="Add User">
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </GridToolbarContainer>
  );
}
