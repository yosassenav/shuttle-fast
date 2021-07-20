import { InferGetServerSidePropsType } from "next";
import { Operator } from "@prisma/client";
import { ContainerOperators } from "@/containers/operators";



const WaitPromise = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface ISsrPageViews
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

/* Función SSR: Server Side Rendering */
export const getServerSideProps = async () => {
  await WaitPromise(1500);

  const res = await fetch("http://localhost:3000/api/operators");
  const response: { data: Array<Operator> } = await res.json();

  return {
    props: {
      operators: response.data,
    },
  };
};

interface IPageOperatorsProps extends ISsrPageViews {}

/* Componente de tipo Page */
export default function PageOperators(props: IPageOperatorsProps) {
  const { operators } = props;

  return <ContainerOperators operators={operators}/>;
}
