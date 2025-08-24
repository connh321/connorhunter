import React, { ReactElement } from "react";
import Header from "@/components/server/header/header";
import styles from "./page.module.scss";
import Footer from "@/components/server/footer/footer";
import { Box, Stack } from "@mui/material";
import "@/../scss/globals.scss";

/**
 * Props for the ProjectsLayout component.
 */
interface Props {
  children: React.ReactNode;
}
const ProjectsLayout = ({ children }: Props): ReactElement => {
  return (
    <Stack direction="column" className={styles.container}>
      <Header className="space" />
      <Stack direction="column" flexGrow={1} className="space">
        <Box sx={{ position: "relative", flexGrow: 1 }}>{children}</Box>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default ProjectsLayout;
