import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import themeLight from './theme/light';
import themeDark from './theme/dark';
import Button from "@material-ui/core/Button";
// import { NotFound } from './pages/NotFound';


function App() {
  const [light, setLight] = useState(false);

  
  const toggleColor = () => {
    if (light === true) setLight(false);
    else setLight(true);
  }

  let theme = light ? themeLight : themeDark;

  theme = createMuiTheme(theme);
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button onClick={toggleColor}>Toggle Theme</Button>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={LoginPage}></Route>
            <Route path="/vendor" component={VendorRoute}></Route>
            <Route path="/staff" component={StaffRoute}></Route>
            <Route path="/admin" component={AdminRoute}></Route>
            <Route path="/reset-password" component={ResetPasswordPage}></Route>
            <Route path="/set-password" component={SetPassword}></Route>
            <Route component={NotFound}></Route> */}
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;

// import React, { useState } from "react";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import Demo from './theme/demo';

// const App = () => {
//   // We keep the theme in app state
//   const [theme, setTheme] = useState({
//     palette: {
//       type: "light"
//     }
//   });

//   // we change the palette type of the theme in state
//   const toggleDarkTheme = () => {
//     let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
//     setTheme({
//       palette: {
//         type: newPaletteType
//       }
//     });
//   };

//   // we generate a MUI-theme from state's theme object
//   const muiTheme = createMuiTheme(theme);

//   // the mui theme is used in the themeProvider.
//   return (
    // <MuiThemeProvider theme={muiTheme}>
    //   <Demo onToggleDark={toggleDarkTheme} />
    // </MuiThemeProvider>
//   );
// };

// export default App;