import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;

  switch (req.method) {
    case "GET":
      res.status(200).json({ hello: "world", body });
      break;
    default:
      res.status(405).json("method not allowed");
      break;
  }
};
