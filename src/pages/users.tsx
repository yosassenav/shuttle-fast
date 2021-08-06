import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { User } from "@prisma/client";
import { ContainerUsers } from "@/containers/users";
import { UserService } from "@/services/userService";

interface ISsrPage
  extends InferGetServerSidePropsType<typeof getServerSideProps> {
  users: Array<User>;
}

/* Función SSR: Server Side Rendering */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = await UserService.get();

  return {
    props: {
      users,
    },
  };
};

interface IProps extends ISsrPage {}

/* Componente de tipo Page */
export default function PageUsers(props: IProps) {
  const { users } = props;

  return <ContainerUsers users={users} />;
}
