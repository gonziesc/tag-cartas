import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from '@material-ui/core/Button'
import { withRouter, Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    textAlign: 'center',
    justify: 'center',
    alignContent: 'center',
    paddingTop: "10%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  problemColor: {
    backgroundColor: red[400]
  }
}));

function CardsPozos(props) {
  const classes = useStyles();
  const {pozo, carta} = props;
  const c = carta? carta : {};
  const diagnose = c.diagnose ? c.diagnose : "No hay inconvenientes";
    debugger;
  return (
    <Link to={"/pozos/"+pozo.id} style={{ textDecoration: 'none' }}>
    <Card className={classes.card}>
      <CardActionArea >
      <CardHeader
        className={classes.problemColor}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={"Last update: " + c.date}
      />
      <CardContent 
      className={classes.media} >
      <CardHeader 
      textAlign= 'center'
      titleTypographyProps={{ variant:'h2' }}
      title={"Well " + pozo.id}
      />
      </CardContent>
      <CardContent 
      className={classes.media} >
        <Typography variant="body2" color="textSecondary" component="p">
          {"Diagnose: " + diagnose }
        </Typography>
      </CardContent>
      
      </CardActionArea>
    </Card>
    </Link>
  );
}
export default withRouter(CardsPozos);
