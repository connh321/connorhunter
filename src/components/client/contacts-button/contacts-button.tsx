"use client";
import { ReactElement } from "react";
import HighlightElement from "@/components/client/highlight-element/highlight-element";
import { Box } from "@mui/material";

const ContactsButton = (): ReactElement => {
  const handleScrollToBottom = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box onClick={handleScrollToBottom} sx={{ cursor: "pointer" }}>
      <HighlightElement type="underline" hover={true} color="#e6d4fa">
        Contact
      </HighlightElement>
    </Box>
  );
};

export default ContactsButton;
