import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { IpropsAlert } from "../../utils/enums";

export default function BasicAlerts({ message, type }: IpropsAlert) {
  return (
    <Stack sx={{ width: "100%", position: "fixed", top: "15%" }} spacing={2}>
      <Alert severity={type}>{message}</Alert>
      {/* <Alert severity="error">{This is an error alert — check it out!}</Alert> */}
      {/* <Alert severity="warning">This is a warning alert — check it out!</Alert> */}
      {/* <Alert severity="info">This is an info alert — check it out!</Alert> */}
      {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
    </Stack>
  );
}
