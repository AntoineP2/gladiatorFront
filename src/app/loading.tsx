import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function loading() {
  return (
    <Box className="flex justify-center items-center h-[80vh]">
      <CircularProgress size={200} />
    </Box>
  );
}
