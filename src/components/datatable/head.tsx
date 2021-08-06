import TableHead from "@material-ui/core/TableHead";
import { Row } from "@/components/datatable/row";

interface IHeadProps {
  columnNames: Array<string>;
}

const Head = (props: IHeadProps) => {
  const { columnNames } = props;

  return (
    <TableHead>
      <Row index={0} data={columnNames} />
    </TableHead>
  );
};

export { Head };
