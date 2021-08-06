import { makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import { Cell } from "src/components/cell";

/*hook: useStyles*/
const useStyles = makeStyles<Theme, { odd: boolean }>((theme: Theme) => ({
  evenRow: {
    backgroundColor: (props) => (props.odd ? "#e0ebeb" : ""),
  },
}));

interface IRowProps<T> {
  data: Array<T>;
  isEven?: boolean;
  index: number;
}

/** Se encarga de renderear un conjunto de celdas a partir de ciertos datos.
 */
const Row = <T,>(props: IRowProps<T>) => {
  /*deconstrucción javascript*/
  const { data, isEven, index } = props;

  const classes = useStyles({
    odd: isEven ? (index % 2 !== 0 ? true : false) : false,
  });

  //Función para mapear (buscar) los datos (los regresa en un arreglo)
  const mapData = () => {
    return data.map((value, idx) => {
      return <Cell key={idx}>{value}</Cell>;
    });
  };

  return <TableRow className={classes.evenRow}>{mapData()}</TableRow>;
};

export { Row };
