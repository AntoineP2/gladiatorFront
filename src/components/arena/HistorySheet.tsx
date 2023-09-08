import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type ChildComponentProps = {
  history: Array<string>;
};

export default function HistorySheet(props: ChildComponentProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} direction="column-reverse">
        {props.history.map((item: string, index: number) => (
          <Item key={index}> {item} </Item>
        ))}
      </Stack>
    </Box>
  );
}
