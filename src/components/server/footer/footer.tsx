"use server";

/**
 * Server-side component for the Footer section.
 *
 * This component renders the footer with a copyright notice.
 *
 * @module Footer
 */
import { Box, Typography } from "@mui/material";

/**
 * Footer component.
 *
 * This component renders the footer with a copyright notice.
 *
 */
const Footer = () => {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      className="footer"
      sx={{
        width: "100%",
        textAlign: "center",
        padding: "3rem 0 1rem 0",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        ©{" "}
        {startYear === currentYear
          ? currentYear
          : `${startYear} - ${currentYear}`}{" "}
        Connor Hunter
      </Typography>
    </Box>
  );
};

export default Footer;
