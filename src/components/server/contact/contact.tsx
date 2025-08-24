"use server";
import { ReactElement } from "react";
import { Alert, Box, Button, Card, Link, Stack } from "@mui/material";
import styles from "./contact.module.scss";
import { IContact } from "@/types/contact";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "@/../scss/globals.scss";
import { getContacts } from "@/lib/contacts";
import { FETCH_CONTACTS_ERROR } from "@/errors/contacts";

/**
 * Contact component.
 * Displays contact information.
 */
const Contact = async (): Promise<ReactElement> => {
  let data: IContact[] | null = null;
  let error: string | null = null;

  try {
    data = await getContacts();
  } catch (err: unknown) {
    console.error("Failed to fetch contacts:", err);
    error = FETCH_CONTACTS_ERROR;
  }

  /**
   * Show error if any.
   */
  if (error) {
    return (
      <Box sx={{ marginY: "1rem" }} component="section">
        <Alert severity="error">{FETCH_CONTACTS_ERROR}</Alert>
      </Box>
    );
  }
  const contactConfig = {
    phone: {
      icon: <PhoneIcon fontSize="inherit" />,
    },
    email: {
      icon: <EmailIcon fontSize="inherit" />,
    },
    github: {
      icon: <GitHubIcon fontSize="inherit" />,
    },
    linkedin: {
      icon: <LinkedInIcon fontSize="inherit" />,
    },
  };

  return (
    <Stack direction="row" component="section" sx={{ mb: 3 }}>
      {data?.map(({ type, label, href }: IContact, index) => {
        // Get the icon and color from the lookup object
        const { icon } = contactConfig[type];
        return (
          <Card className={styles.card} key={index}>
            <Stack
              direction="row"
              spacing="2rem"
              alignItems="center"
              flexWrap="wrap"
              width="100%"
              className={styles.cardContent}
            >
              <Button size="small" className="btnAnimation">
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  className={styles.link}
                  sx={{
                    wordBreak: "break-all",
                    fontSize: { xs: ".65rem !important" },
                  }}
                >
                  <Box className={styles.iconWrapper}>{icon}</Box>
                  <div className={styles.textContent}>{label}</div>
                </Link>
              </Button>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Contact;
