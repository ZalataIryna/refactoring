import React from "react";

import { IconButton } from "@material-ui/core";
import { CloseOutlined as CloseOutlinedIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  iconButtonRoot: {
    padding: 0,
    marginBottom: theme.spacing(0.5),
  },
  closeIcon: {
    color: "#D9D9D9",
  },
}));

const IconBtn = () => {
  const classes = useStyles();

  return (
    <IconButton
      classes={{
        root: classes.iconButtonRoot,
      }}
    >
      <CloseOutlinedIcon className={classes.closeIcon} />
    </IconButton>
  );
};

export default IconBtn;
