"use server";
import { ReactElement } from "react";
import { Box, Button, Link, Stack } from "@mui/material";
import styles from "./header.module.scss";
import dynamic from "next/dynamic";

interface Props {
  className?: string;
}
/**
 * Header component renders the top navigation bar.
 *
 * - Displays name section with short and long text variations.
 * - Displays navigation buttons.
 *
 * @component
 * @returns {ReactElement} The header bar with logo and navigation buttons.
 */
const Header = ({ className }: Props): ReactElement => {
  const ResumeButton = dynamic(
    () => import("@/components/server/resume-button/resume-button"),
    {
      ssr: true,
    },
  );
  const ContactsButton = dynamic(
    () => import("@/components/client/contacts-button/contacts-button"),
    {
      ssr: true,
    },
  );
  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={`${styles.header} ${className}`}
    >
      <Box className={styles.nameContainer}>
        <Link href="/">
          <Button className={`${styles.btn} ${styles.title} ${styles.long}`}>
            CONNOR HUNTER
          </Button>
          <Button className={`${styles.btn} ${styles.title} ${styles.short}`}>
            CH
          </Button>
        </Link>
      </Box>
      <Stack direction="row" gap={2}>
        <ResumeButton></ResumeButton>
        <ContactsButton></ContactsButton>
      </Stack>
    </Stack>
  );
};

export default Header;
