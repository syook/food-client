import React from "react";
import SyookTable from "@syook/react-tabulous";

const UserTable = props => {
  const columnDefs = () => [
    {
      headerName: "Name",
      field: "user_name",
      type: "String",
      cell: user => user.name,
      isSortable: true,
      isSearchable: true,
      isFilterable: false
    },
    {
      headerName: "Email",
      field: "user_email",
      type: "Email",
      cell: user => user.email,
      isSortable: true,
      isSearchable: true,
      isFilterable: false
    },
    {
      headerName: "Mobile",
      field: "user_email",
      type: "Number",
      cell: user => user.mobile,
      isSortable: true,
      isSearchable: true,
      isFilterable: false
    },
    {
      headerName: "Default chapati",
      field: "user_default_chapati",
      type: "Number",
      cell: user => user.defaultChapati,
      isSortable: true,
      isSearchable: true,
      isFilterable: false
      
    }

  ];
  return (
    <SyookTable
      // actionOnHover
      columnDefs={columnDefs({ ...props })}
      data={props.currentData || []}
      mandatoryFields={["Name", "Email","Mobile"]}
      tableName={"Users"}
    >
      {props.children}
    </SyookTable>
  );
};
export default UserTable;
