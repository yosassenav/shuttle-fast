import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles } from "@material-ui/styles";

/*Hook: */
const useStyles = makeStyles((theme: Theme) => {});

interface IProps {}

/*Aquí debes probar los componentes de MaterialUI*/
const Module = (props: IProps) => {
  return (
    <Container>
      <Paper>
        Module component{" "}
        <Button variant="contained" color="primary" size="small">
          my button
        </Button>
      </Paper>
    </Container>
  );
};

export { Module };
