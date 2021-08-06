import React from "react";
import { User } from "@prisma/client";
import { DataTable } from "@/components/datatable/datatable";

const columnNames = ["id", "name", "lastName", "password", "creationDate"];

interface IViewUsersProps {
  users: User[] | null;
}

/* Solo pinta. */
const ViewUsers = (props: IViewUsersProps) => {
  const { users } = props;

  if (users === null) return <div>Loading...</div>;
  if (users) return <DataTable<User> data={users} columnNames={columnNames} />;

  return <div>No Data</div>;
};

export { ViewUsers };
