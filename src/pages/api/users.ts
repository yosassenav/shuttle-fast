import type { NextApiRequest, NextApiResponse } from "next";
import { UserController } from "../../api/user/controller";

// NETWORK

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // where to get the users?
  const controller = new UserController();
  const users = await controller.getUsers(req, res);

  switch (req.method) {
    case "GET":
      return res.status(200).json({
        data: { users },
      });
    default:
      return res.status(405).json("method not allowed");
  }
};
