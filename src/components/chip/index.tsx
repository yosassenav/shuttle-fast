import { Container } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles, createStyles } from "@material-ui/styles";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import Avatar from "@material-ui/core/Avatar";

/*Hook: */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(3.5),
        padding: theme.spacing(2.8),
      },
    },
  })
);

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
        icon={<FaceIcon />}
        label="Clickable deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Primary Clickable"
        clickable
        color="secondary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
    </Container>
  );
};

export { Chips };
