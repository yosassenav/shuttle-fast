import { ReactNode } from "react";
import { TableCell } from "@material-ui/core";

interface ICellProps {
  children: ReactNode; // valor de cada fila
}

/** Componente Cell.
 * componente para pintar los valores de cada fila
 * @param props
 * @returns
 */
const Cell = (props: ICellProps) => {
  // deconstrucción objeto
  const { children } = props;

  return <TableCell>{children}</TableCell>;
};

export { Cell };
