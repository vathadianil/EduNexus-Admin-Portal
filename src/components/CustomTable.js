import { Box, Card } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../css/table.module.css";
import CustomToolbar from "./CustomToolbar";
import SnackBar from "./SnackBar";
import useSnackBar from "../utils/hooks/useSnackBar";
import { useState } from "react";
import AddUserDialog from "./AddUserDialog";

function CustomTable({ rows, columns, setRowId, loading }) {
  const { open, showSnackBar, hideSnackBar, snackBarProps } = useSnackBar();
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClickOpen = async () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  return (
    <Box className={styles.container}>
      <Card elevation={6} className={styles["inner-container"]}>
        <DataGrid
          disableColumnSelector={true}
          disableColumnMenu={true}
          disableDensitySelector={true}
          disableColumnFilter={true}
          rows={rows}
          columns={columns}
          getRowId={(row) => row.aID}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          loading={loading}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
          slots={{
            toolbar: CustomToolbar,
          }}
          slotProps={{
            toolbar: {
              handleClickOpen,
            },
          }}
          onCellEditStop={(params) => setRowId(params.id)}
        ></DataGrid>
      </Card>
      <AddUserDialog
        open={dialogOpen}
        handleClose={handleClose}
        showSnackBar={showSnackBar}
      />
      <SnackBar
        open={open}
        handleClose={hideSnackBar}
        type={snackBarProps.type}
        message={snackBarProps.message}
      />
    </Box>
  );
}

export default CustomTable;
