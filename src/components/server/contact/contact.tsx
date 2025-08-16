"use server";
import { ReactElement } from "react";
import { Alert, Box, Card, Link, Stack } from "@mui/material";
import styles from "./contact.module.scss";
import { IContact } from "@/types/contact";
import HighlightElement from "@/components/client/highlight-element/highlight-element";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 * Props for the Contact component.
 *
 * @property {() => Promise<IContact[]>} fetchFunction - Function to fetch data for the contacts.
 * @property {string} errorMessage - The error message to display if the fetch fails.
 */
interface Props {
  fetchFunction: () => Promise<IContact[]>;
  errorMessage: string;
}

const Contact = async ({
  fetchFunction,
  errorMessage,
}: Props): Promise<ReactElement> => {
  let data: IContact[] | null = null;
  let error: string | null = null;

  try {
    data = await fetchFunction();
  } catch (err: unknown) {
    console.error("Failed to fetch certifications:", err);
    error = errorMessage;
  }

  /**
   * Show error if any.
   */
  if (error) {
    return (
      <Box sx={{ marginY: "1rem" }} component="section">
        <Alert severity="error">{errorMessage}</Alert>
      </Box>
    );
  }
  const contactConfig = {
    phone: {
      icon: <PhoneIcon fontSize="small" />,
      color: "#f3ced1",
    },
    email: {
      icon: <EmailIcon fontSize="small" />,
      color: "#e6d4fa",
    },
    github: {
      icon: <GitHubIcon fontSize="small" />,
      color: "#e6d4fa",
    },
    linkedin: {
      icon: <LinkedInIcon fontSize="small" />,
      color: "#fbe894",
    },
  };

  return (
    <Stack direction="row" component="section" sx={{ mb: 3 }}>
      {data?.map(({ type, label, href }: IContact, index) => {
        // Get the icon and color from the lookup object
        const { icon, color } = contactConfig[type];
        return (
          <Card className={styles.card} key={index}>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              flexWrap="wrap"
              width="100%"
              className={styles.cardContent}
            >
              <HighlightElement
                type="underline"
                hover={true}
                color={color}
                className={`${styles.title} ${styles.short}`}
              >
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
              </HighlightElement>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Contact;
