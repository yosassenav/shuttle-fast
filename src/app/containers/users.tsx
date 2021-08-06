import React, { useEffect, useState } from "react";
import { User } from "@prisma/client";
import { ViewUsers } from "@/views/users";

interface IContainerProps {
  users: User[];
}

/* Se encarga de la lógica, estados, y eventos. */
const ContainerUsers = (props: IContainerProps) => {
  const { users } = props;

  const [usersList, setUsersList] = useState<User[]>(null);

  useEffect(() => {
    console.log({ users });
    setUsersList(users);
  }, [users]);

  return <ViewUsers users={usersList} />;
};

export { ContainerUsers };
