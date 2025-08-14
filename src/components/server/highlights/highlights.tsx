"use server";

import { ReactElement } from "react";
import { Box } from "@mui/material";
import styles from "./highlights.module.scss";

const Highlights = (): ReactElement => {
  return <Box className={styles.highlights} component="section"></Box>;
};

export default Highlights;
