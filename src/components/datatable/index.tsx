import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container } from "src/components/container";
import { ViewUsers } from "@/views/users";
import { User } from "@prisma/client";
import users from "src/pages/api/users";

//Tarea2: crear interfaz para componente DataTable para pintar datos de los usuarios

interface IDataTableProps<T> {
  //Array de tipo genérico ya que se puede usar para recibir la lista de usuarios, clientes u operadores
  data: Array<T>;
  //users: User[];
}

const DataTable = <T,>(props: IDataTableProps<T>) => {
  const { data } = props;
  return <Container data={data} />;
};

export { DataTable };

/*Para mostrar los datos de los usuarios se debe:
1. Importar la vista (view) de prisma de los usuarios
2. Hcaer un Array con los nombres de las columnas de las tablas
y pasarselo al componente Head
3. Los datos de los usuarios se muestran en el body(?)*/
