"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import styles from "./header.module.scss";

/**
 * Header component renders the top navigation bar.
 *
 * - Displays name section with short and long text variations.
 * - Displays navigation buttons.
 *
 * @component
 * @returns {React.JSX.Element} The header bar with logo and navigation buttons.
 */
const Header = (): React.JSX.Element => {
  const navButtons: string[] = ["About", "Projects", "Contact"];

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={styles.header}
    >
      <div className={styles.nameContainer}>
        <Button
          variant="text"
          size="small"
          className={`${styles.btn} ${styles.title} ${styles.short}`}
        >
          CH
        </Button>
        <Button
          variant="text"
          size="small"
          className={`${styles.btn} ${styles.title} ${styles.long}`}
        >
          CONNOR HUNTER
        </Button>
      </div>
      <div className={styles.btns}>
        {navButtons.map((label) => (
          <Button
            key={label}
            variant="text"
            size="small"
            className={styles.btn}
          >
            {label}
          </Button>
        ))}
      </div>
    </Stack>
  );
};

export default Header;
