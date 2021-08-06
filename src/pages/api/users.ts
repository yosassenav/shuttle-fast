import type { NextApiRequest, NextApiResponse } from "next";
import { UserController } from "@/api/user/controller";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const controller = new UserController();

  await Route.navigate({
    controller,
    req,
    res,
  });
};

/*Interfaz donde se definen los parámetros que utilizará la clase 'Route'*/
interface IProps {
  controller: UserController;
  req: NextApiRequest;
  res: NextApiResponse;
}

type RouteMethod = (props: IProps) => Promise<void>;

class BaseRoute {
  static async handleError(props: IProps, method: RouteMethod) {
    try {
      return await method(props);
    } catch (error: any) {
      props.res.status(500).json({
        message: "Users GET method has failed.",
        error: error,
      });
    }
  }

  static notImplemented(res: NextApiResponse) {
    res.status(501).json("Method not implemented yet.");
  }
}

/*La clase Route hereda de la clase BaseRoute*/
class Route extends BaseRoute {
  static async navigate(props: IProps) {
    await this.redirection(props);
  }

  private static async redirection(props: IProps) {
    const { req, res } = props;

    switch (req.method) {
      case "DELETE":
        return await this.handleError(props, this.delete);
      case "GET":
        return await this.handleError(props, this.get);
      case "PATCH":
        return await this.handleError(props, this.patch);
      case "POST":
        return await this.handleError(props, this.post);
      case "PUT":
        return await this.handleError(props, this.put);
      default:
        res.status(405).json("method not allowed.");
    }
  }

  private static async delete(props: IProps) {
    this.notImplemented(props.res);
  }

  private static async get(props: IProps) {
    const { controller, req, res } = props;
    const result = await controller.getUsers(req, res);

    console.log({ result });

    res.status(200).json(result);
  }

  private static async patch(props: IProps) {
    this.notImplemented(props.res);
  }

  private static async post(props: IProps) {
    this.notImplemented(props.res);
  }

  private static async put(props: IProps) {
    this.notImplemented(props.res);
  }
}
