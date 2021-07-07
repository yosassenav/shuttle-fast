import React, { Fragment } from "react";
import { User } from "@prisma/client";

interface IViewUsersProps {
  users: User[] | null;
}

/* Solo pinta. */
const ViewUsers = (props: IViewUsersProps) => {
  const { users } = props;

  const loading = <div>Loading...</div>;

  const render = (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>password</td>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );

  return users === null ? loading : render;
};

export { ViewUsers };
