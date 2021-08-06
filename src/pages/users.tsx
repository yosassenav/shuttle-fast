import { useRouter } from "next/router";
import { InferGetServerSidePropsType } from "next";

import { User } from "@prisma/client";
import { ContainerUsers } from "@/containers/users";

interface ISsrPageViews
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

/* Función SSR: Server Side Rendering */
export const getServerSideProps = async () => {
  const router = useRouter();

  router.basePath;

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
