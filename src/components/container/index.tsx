import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import { Head } from "src/components/head";
import { Body } from "src/components/body";

interface IContainerProps<T> {
  data: Array<T>; //arreglo de los nombres de los campos de la tabla
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

export { Container };
