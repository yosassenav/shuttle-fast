import { Paper, Table } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import { Head } from "@/components/datatable/head";
import { Body } from "@/components/datatable/body";

interface IContainerProps<T> {
  data: Array<T>; //arreglo de los nombres de los campos de la tabla
  columnNames: Array<string>;
}

const Container = <T,>(props: IContainerProps<T>) => {
  //deconstrucción
  const { columnNames, data } = props;

  //return del componente
  return (
    <TableContainer component={Paper}>
      <br></br>
      <br></br>
      <Table>
        <Head columnNames={columnNames} />
        <Body data={data} />
      </Table>
    </TableContainer>
  );
};

export { Container };
