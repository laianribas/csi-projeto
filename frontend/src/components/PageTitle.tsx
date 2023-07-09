import { Typography } from "@mui/material";
import React from "react";

interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <Typography variant="h4" component="h1" align="center" sx={{ mt: 3, mb: 4, pt: 8 }}>
      {text}
    </Typography>
  );
};

export default PageTitle;
