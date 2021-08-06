import TableBody from "@material-ui/core/TableBody";
import { Row } from "src/components/row";


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

export { Body };
