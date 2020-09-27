import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";

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
    display: "inline-block",
    textAlign: "center",
  },
});

export default function Terminal() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <motion.div
        animate={{
          opacity: ["0", "1"],
          scale: [2, 1],
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.75 }}
      >
        <Typography display="block" variant="body1" className={classes.text}>
          Hello! I'm Jyotir. <br /> A mechanical engineering student <br /> and
          self-taught programmer.
        </Typography>
      </motion.div>
    </div>
  );
}
