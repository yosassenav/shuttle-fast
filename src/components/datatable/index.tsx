import { ReactNode } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

/*hook: useStyles*/
const useStyles = makeStyles<Theme, { odd: boolean }>((theme: Theme) => ({
  evenRow: {
    backgroundColor: (props) => (props.odd ? "#e0ebeb" : ""),
  },
}));

//Tarea1: Borrar función createData y el const rows
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

//Tarea2: crear interfaz para componente DataTable para pintar datos de los usuarios

interface IDataTableProps {
  //Array de usuarios (?)
}

const DataTable = (props: IDataTableProps) => {
  return <Container data={rows} />;
};

interface IContainerProps<T> {
  data: Array<T>;
}

const Container = <T,>(props: IContainerProps<T>) => {
  //deconstrucción
  const { data } = props;

  //función para obtener datos y sus respectivos índices
  const getFields = () => {
    return Object.entries(data[0]).map((obj, idx) => {
      const field = obj[0];
      return field;
    });
  };

  //return del componente
  return (
    <TableContainer component={Paper}>
      <br></br>
      <br></br>
      <Table aria-label="simple table">
        <Head fields={getFields()} />
        <Body data={data} />
      </Table>
    </TableContainer>
  );
};

interface IHeadProps {
  fields: Array<string>;
}

const Head = (props: IHeadProps) => {
  const { fields } = props;

  return (
    <TableHead>
      <Row index={0} data={fields} />
    </TableHead>
  );
};

interface IBodyProps<T> {
  data: Array<T>;
}

// <T> tipo de dato genérico
const Body = <T,>(props: IBodyProps<T>) => {
  const { data } = props;

  const convertToArray = (object: T) => {
    //el primer return es lo que regresa la función 'convertToArray'
    return Object.entries(object).map((obj) => {
      const value = obj[1];
      return value;
    });
  };

  return (
    <TableBody>
      {data.map((row, idx) => {
        return <Row isEven index={idx} data={convertToArray(row)} key={idx} />;
      })}
    </TableBody>
  );
};

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

  const mapData = () => {
    return data.map((value, idx) => {
      return <Cell key={idx}>{value}</Cell>;
    });
  };

  return <TableRow className={classes.evenRow}>{mapData()}</TableRow>;
};

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

//Tarea 4: Separar los componentes atómicos en archivos individuales

export { DataTable };

/*Para mostrar los datos de los usuarios se debe:
1. Importar la vista (view) de prisma de los usuarios
2. Hcaer un Array con los nombres de las columnas de las tablas
y pasarselo al componente Head
3. Los datos de los usuarios se muestran en el body(?)*/
