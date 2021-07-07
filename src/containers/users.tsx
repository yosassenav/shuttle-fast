import { ViewUsers } from "@/views/users";
import { User } from "@prisma/client";
import React, { useEffect, useState } from "react";

const WaitPromise = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface IContainerUsersProps {
  users: User[];
}

/* Se encarga de la lógica, estados, y eventos. */
const ContainerUsers = (props: IContainerUsersProps) => {
  const { users } = props;

  const [usersList, setUserList] = useState<User[]>(null);

  useEffect(() => {
    wait();
  }, []);

  const wait = async () => {
    await WaitPromise(5000);

    setUserList(users);
  };

  return <ViewUsers users={usersList} />;
};

export { ContainerUsers };
