"use server";
import { ReactElement } from "react";
import { Box, Button, Link } from "@mui/material";
import "../../../../scss/globals.scss";

/**
 * ResumeButton component.
 * A button that open the resume link in a new tab.
 */
const ResumeButton = (): ReactElement => {
  const url = process.env.NEXT_PUBLIC_S3_RESUME_URL!;

  return (
    <Box sx={{ cursor: "pointer" }}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Button className="btnAnimation">Resume</Button>
      </Link>
    </Box>
  );
};

export default ResumeButton;
