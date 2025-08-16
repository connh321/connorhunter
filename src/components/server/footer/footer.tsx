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
import { getContacts } from "@/lib/contacts";
import { FETCH_CONTACTS_ERROR } from "@/errors/contacts";

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
      className="footer"
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        textAlign: "center",
        padding: "3rem 0 0 0",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        ©{" "}
        {startYear === currentYear
          ? currentYear
          : `${startYear} - ${currentYear}`}{" "}
        Connor Hunter
      </Typography>
      {/*<Suspense fallback={<CertificationsFallback />}>*/}
      <Contact
        fetchFunction={getContacts}
        errorMessage={FETCH_CONTACTS_ERROR}
      ></Contact>

      {/*</Suspense>*/}
    </Stack>
  );
};
export default Footer;
