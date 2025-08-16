"use server";
import { ReactElement } from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./header.module.scss";
import ContactsButton from "@/components/client/contacts-button/contacts-button";

/**
 * Header component renders the top navigation bar.
 *
 * - Displays name section with short and long text variations.
 * - Displays navigation buttons.
 *
 * @component
 * @returns {ReactElement} The header bar with logo and navigation buttons.
 */
const Header = (): ReactElement => {
  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={styles.header}
    >
      <Box className={styles.nameContainer}>
        <Typography
          variant="h2"
          className={`${styles.btn} ${styles.title} ${styles.long}`}
        >
          CONNOR HUNTER
        </Typography>
        <Typography
          variant="h2"
          className={`${styles.btn} ${styles.title} ${styles.short}`}
        >
          CH
        </Typography>
      </Box>
      <ContactsButton></ContactsButton>
    </Stack>
  );
};

export default Header;
