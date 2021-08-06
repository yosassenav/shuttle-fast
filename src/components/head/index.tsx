import TableHead from "@material-ui/core/TableHead";
import { Row } from "src/components/row";

// Arreglo de los nombres de los campos de la tabla Usuarios
var cols = ["id", "nombre", "email", "password"];

interface IHeadProps {
  fields: Array<string>;
}

const Head = (props: IHeadProps) => {
  const { fields } = props;

  return (
    <TableHead>
      <Row index={0} data={cols} />
    </TableHead>
  );
};

export { Head };
