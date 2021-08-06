import { ReactNode } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

interface ICellProps {
  children: ReactNode; // valor de cada fila
}

/** Componente Cell.
 * componente para pintar los valores de cada fila
 * @param props
 * @returns
 */
const Cell = (props: ICellProps) => {
  /*deconstrucción objeto*/
  const { children } = props;

  return <TableCell>{children}</TableCell>;
};

export { Cell };
