import { useEffect, useMemo, useState } from "react";
import CustomBreadCrumbs from "../components/CustomBreadCrumbs";
import CustomTable from "../components/CustomTable";
import UserActions from "../components/UserActions";
import axios from "../utils/axios/axios";
import { GET_USER } from "../utils/api/api-request";
import DisplayQr from "../components/DisplayQr";

export default function Users() {
  const [rowId, setRowId] = useState(null);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = useMemo(
    () => [
      {
        field: "aID",
        headerName: "ID",
        width: 70,
      },
      {
        field: "role",
        headerName: "Role",
        width: 70,
        editable: true,
      },
      {
        field: "fname",
        headerName: "First name",
        width: 130,
        editable: true,
      },
      {
        field: "lname",
        headerName: "Last name",
        width: 130,
        editable: true,
      },

      {
        field: "email",
        headerName: "Email Id",
        width: 170,
        editable: true,
      },
      {
        field: "userid",
        headerName: "User Id",
        width: 90,
      },
      {
        field: "mobileno",
        headerName: "Mobile No",
        width: 120,
        editable: true,
      },

      {
        field: "isactive",
        headerName: "Status",
        type: "boolean",
        width: 90,
        editable: true,
      },
      {
        field: "collegeID",
        headerName: "College Id",
        width: 90,
      },
      {
        field: "collegeName",
        headerName: "College Name",
        width: 190,
      },
      {
        field: "paymentqr",
        headerName: "Payment QR",
        renderCell: (params) => <DisplayQr {...{ params }} />,
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        renderCell: (params) => (
          <UserActions {...{ params, rowId, setRowId }} />
        ),
      },
    ],
    [rowId]
  );

  const getUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axios(GET_USER);
      if (data?.data?.length) {
        setUserList(data?.data);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setUserList([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <CustomBreadCrumbs />
      <CustomTable
        rows={userList || []}
        columns={columns}
        setRowId={setRowId}
        loading={loading}
      />
    </>
  );
}
