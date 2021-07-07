import React, { Fragment } from "react";
import { User } from "@prisma/client";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const response: { data: Array<User> } = await res.json();

  return {
    props: {
      users: response.data,
    },
  };
};

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Fragment>
      <table>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>password</td>
        </tr>
        {props.users.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          );
        })}
      </table>
    </Fragment>
  );
}
