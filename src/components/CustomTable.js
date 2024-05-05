import { Box, Card } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import styles from "../css/table.module.css";

function CustomTable({ rows, columns, setRowId, loading }) {
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
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          onCellEditStop={(params) => setRowId(params.id)}
        ></DataGrid>
      </Card>
    </Box>
  );
}

export default CustomTable;
