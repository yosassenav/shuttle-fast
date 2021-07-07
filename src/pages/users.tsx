import { InferGetServerSidePropsType } from "next";
import { User } from "@prisma/client";

import { ContainerUsers } from "@/containers/users";
import { Fragment, useEffect } from "react";
import { useState } from "react";

const WaitPromise = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface ISsrPageViews
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

/* Función SSR */
export const getServerSideProps = async () => {
  await WaitPromise(1500);

  const res = await fetch("http://localhost:3000/api/users");
  const response: { data: Array<User> } = await res.json();

  return {
    props: {
      users: response.data,
    },
  };
};

interface IPageUsersProps extends ISsrPageViews {}

/* Componente de tipo Page */
export default function PageUsers(props: IPageUsersProps) {
  const { users } = props;

  return <ContainerUsers users={users} />;
}
