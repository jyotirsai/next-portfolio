import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import Typed from "react-typed";

const useStyles = makeStyles({
  container: {
    display: "flex",
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "95vh",
  },
  text: {
    color: "white",
    display: "block",
    textAlign: "center",
  },
});

export default function Intro() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <motion.div
        initial={{ y: -25 }}
        animate={{
          opacity: ["0", "1"],
          y: 0,
        }}
        overflow={"hidden"}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.75 }}
      >
        <Typography className={classes.text} variant="h3">
          Jyotir Sai
        </Typography>
        <Typography display="block" variant="body2" className={classes.text}>
          <Typed
            strings={["Engineering Student and Programmer"]}
            typeSpeed={40}
          />
        </Typography>
      </motion.div>
    </div>
  );
}
