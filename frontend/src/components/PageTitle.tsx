import { Typography } from "@mui/material";
import React from "react";

interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <Typography variant="h4" component="h1" align="center" sx={{ my: 4 }}>
      {text}
    </Typography>
  );
};

export default PageTitle;
