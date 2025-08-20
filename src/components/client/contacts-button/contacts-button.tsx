"use client";
import { ReactElement } from "react";
import { Box, Button } from "@mui/material";
import "@/../scss/globals.scss";

const ContactsButton = (): ReactElement => {
  const handleScrollToBottom = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box onClick={handleScrollToBottom} sx={{ cursor: "pointer" }}>
      <Button className="btnAnimation">Contact</Button>
    </Box>
  );
};

export default ContactsButton;
