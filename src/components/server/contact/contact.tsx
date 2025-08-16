"use server";
import { ReactElement } from "react";
import { Box, Card, Grid, Link, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./contact.module.scss";
import HighlightElement from "@/components/client/highlight-element/highlight-element";

const Contact = (): ReactElement => {
  const contacts = [
    {
      label: "Phone",
      value: "(315) 694-6563",
      href: "tel:3156946563",
      color: "#f3ced1",
      icon: <PhoneIcon fontSize="small" />,
    },
    {
      label: "Email",
      value: "connh321@gmail",
      href: "mailto:connh321@gmail.com",
      color: "#e6d4fa",
      icon: <EmailIcon fontSize="small" />,
    },
    {
      label: "GitHub",
      value: "git/connh321",
      href: "https://github.com/connh321",
      color: "#e6d4fa",
      icon: <GitHubIcon fontSize="small" />,
    },
    {
      label: "LinkedIn",
      value: "in/connor--hunter",
      href: "https://linkedin.com/in/connor--hunter",
      color: "#fbe894",
      icon: <LinkedInIcon fontSize="small" />,
    },
  ];

  return (
    <Grid
      id="Contact"
      container
      component="aside"
      className={styles.contact}
      spacing={2}
      direction={{ xs: "row", md: "column" }}
    >
      {contacts.map((contact) => (
        <Grid
          size={{ xs: 6, md: 12 }}
          key={contact.label}
          className={styles.cardContainer}
        >
          <Card className={styles.card}>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              className={styles.cardContent}
            >
              <Box className={styles.iconWrapper}>{contact.icon}</Box>
              <div className={styles.textContent}>
                <Typography variant="subtitle2" className={styles.label}>
                  {contact.label}:
                </Typography>
                <HighlightElement
                  type="box"
                  hover={true}
                  color={contact.color}
                  className={`${styles.title} ${styles.short}`}
                >
                  <Link
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    className={styles.link}
                    sx={{
                      wordBreak: "break-all",
                      fontSize: { xs: ".65rem !important" },
                    }}
                  >
                    {contact.value}
                  </Link>
                </HighlightElement>
              </div>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Contact;
