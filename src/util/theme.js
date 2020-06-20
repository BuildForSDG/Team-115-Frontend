export default {
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },

  // the object to be spread
  header: {
    appbar: {
      background: "transparent",
      boxShadow: "none",
    },
    title: {
      flexGrow: 1,
      marginLeft: 20,
      textDecoration: "none",
    },
    typo: {
      marginRight: 50,
    },
  },
  general: {
    typography: {
      useNextVariants: true,
    },
    form: {
      textAlign: "center",
    },
    image: {
      margin: "20px auto 20px auto",
    },
    pageTitle: {
      margin: "10px auto 10px auto",
    },
    textField: {
      margin: "10px auto 10px auto",
    },
    button: {
      marginTop: 20,
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10,
    },
    progress: {
      position: "absolute",
    },
    invisibleSeparator: {
      border: "none",
      margin: 4,
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20,
    },
    paper: {
      padding: 20,
    },
  },
  home: {
    grid: {
      justify: "center",
      marginRight: "-15px",
      marginLeft: "-15px",
      width: "auto",
    },
    gridItem: {
      align: "center",
      width: "100%",
      minHeight: "1px",
      paddingRight: "15px",
      paddingLeft: "15px",
      flexBasis: "auto",
    },
    container: {
      zIndex: "12",
      color: "#FFFFFF",
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      height: "450px",
      "@media (min-width: 576px)": {
        maxWidth: "540px",
      },
      "@media (min-width: 768px)": {
        maxWidth: "720px",
      },
      "@media (min-width: 992px)": {
        maxWidth: "960px",
      },
      "@media (min-width: 1200px)": {
        maxWidth: "1140px",
      },
    },
    title: {
      margin: "1.8rem 0 0.875rem",
      textDecoration: "none",
      display: "inline-block",
      position: "relative",
      marginTop: "80px",
      minHeight: "32px",
      color: "#FFFFFF",
    },
  },
  search: {
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
  },
};
