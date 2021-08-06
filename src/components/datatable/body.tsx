import { TableBody } from "@material-ui/core";
import { Row } from "@/components/datatable/row";

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
        return <Row data={convertToArray(row)} index={idx} isEven key={idx} />;
      })}
    </TableBody>
  );
};

export { Body };
