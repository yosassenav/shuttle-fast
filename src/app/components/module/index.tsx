import { ReactNode } from "react";
import { Container, Paper, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

/*Hook: */
const useStyles = makeStyles((theme: Theme) => {});

interface IProps {
  children: ReactNode;
}

/*Aquí debes probar los componentes de MaterialUI*/
const Module = (props: IProps) => {
  const { children } = props;

  return (
    <Container>
      <Paper>{children}</Paper>
    </Container>
  );
};

export { Module };
