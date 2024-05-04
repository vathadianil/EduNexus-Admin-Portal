import { Card } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import styles from "../css/table.module.css";
import { GridCsvExportOptions } from "@mui/x-data-grid";

function CustomTable({ rows, columns }) {
  return (
    <Card className={styles.container}>
      <DataGrid
        disableColumnSelector={true}
        disableColumnMenu={true}
        disableDensitySelector={true}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      ></DataGrid>
    </Card>
  );
}

export default CustomTable;
