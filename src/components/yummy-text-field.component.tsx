import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

type YummyTextFieldProps = TextFieldProps;

const YummyTextField = (props: YummyTextFieldProps) => {
  return <TextField {...props} />;
};

export default YummyTextField;
