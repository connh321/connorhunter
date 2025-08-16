"use client";
import { ReactElement } from "react";
import HighlightElement from "@/components/client/highlight-element/highlight-element";
import { Box, Link } from "@mui/material";

const ResumeButton = (): ReactElement => {
  const url = process.env.NEXT_PUBLIC_S3_RESUME_URL!;

  const handleScrollToBottom = () => {
    document
      .getElementById("resume-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box onClick={handleScrollToBottom} sx={{ cursor: "pointer" }}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <HighlightElement type="underline" hover={true} color="#f3ced1">
          Resume
        </HighlightElement>
      </Link>
    </Box>
  );
};

export default ResumeButton;
