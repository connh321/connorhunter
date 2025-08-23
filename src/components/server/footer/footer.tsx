"use server";

/**
 * Server-side component for the Footer section.
 *
 * This component renders the footer with a copyright notice.
 *
 * @module Footer
 */
import { Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import styles from "./footer.module.scss";

/**
 * Footer component.
 *
 * This component renders the footer with a copyright notice.
 *
 */
const Footer = () => {
  const Contact = dynamic(() => import("@/components/server/contact/contact"), {
    ssr: true,
  });

  const startYear = 2025;
  const currentYear = new Date().getFullYear();

  return (
    <Stack
      id="contact-section"
      component="footer"
      className={styles.footer}
      direction="column"
      alignItems="center"
      flexWrap="wrap"
      justifyContent="center"
      sx={{
        width: "100%",
        textAlign: "center",
        padding: "2rem 0 0 0",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="primary" sx={{ mb: 0.375 }}>
        ©{" "}
        {startYear === currentYear
          ? currentYear
          : `${startYear} - ${currentYear}`}{" "}
        Connor Hunter
      </Typography>
      <Contact></Contact>
    </Stack>
  );
};
export default Footer;
