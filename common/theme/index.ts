import { createMuiTheme } from "@material-ui/core/styles";

interface Colors {
  grey: string;
  white: string;
  black: string;
}

const colors: Colors = {
  grey: "#E5E5E5",
  white: "#ffffff",
  black: "#000000",
};

const theme = createMuiTheme({
  spacing: 1.5,
  palette: {
    grey: {
      main: colors.grey,
    },
    common: {
      white: colors.white,
    },
    divider: {
      main: colors.black,
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        marginTop: "29px",
      },
    },
  },

  props: {
    MuiButton: {
      variant: "contained",
    },
    MuiTextField: {
      variant: "outlined",
      size: "small",
    },
  },
});

export default theme;
