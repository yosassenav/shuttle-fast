import { Container } from "@/components/datatable/container";

interface IDataTableProps<T> {
  //Array de tipo genérico ya que se puede usar para recibir la lista de usuarios, clientes u operadores
  columnNames: Array<string>;
  data: Array<T>;
}

const DataTable = <T,>(props: IDataTableProps<T>) => {
  const { columnNames, data } = props;

  return <Container data={data} columnNames={columnNames} />;
};

export { DataTable };

/*Para mostrar los datos de los usuarios se debe:
1. Importar la vista (view) de prisma de los usuarios
2. Hcaer un Array con los nombres de las columnas de las tablas
y pasarselo al componente Head
3. Los datos de los usuarios se muestran en el body(?)*/
