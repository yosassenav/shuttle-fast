import { Avatar, Chip, Container, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Done, Face } from "@material-ui/icons";

/*Hook: */
const useStyles = makeStyles((theme: Theme) => {});

interface IProps {}

const Chips = (props: IProps) => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Container>
      <br></br>
      <Chip
        icon={<Face />}
        label={"Clickable deletable"}
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        avatar={<Avatar>M</Avatar>}
        clickable
        color={"secondary"}
        deleteIcon={<Done />}
        label={"Primary Clickable"}
        onDelete={handleDelete}
        size={"small"}
      />
    </Container>
  );
};

export { Chips };
