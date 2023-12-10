import React from "react";
import { enqueueSnackbar } from "notistack";

export const MESSAGE_TYPE = {
  DEFAULT: "default",
  INFO: "info",
  SUCCESSFUL: "success",
  ERROR: "error",
  WARNING: "warning"
};

export const MessageBox = (props) => {
  const message = props.message;
  const messageType = props.messageType;

  return (
    <div>
      {enqueueSnackbar(message, {
        variant: messageType
      })}
    </div>
  );
};
