import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
  "/home": "Home",
  "/home/users": "Users",
};

function CustomBreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      style={{ marginBottom: "1em" }}
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <Link underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default CustomBreadCrumbs;
