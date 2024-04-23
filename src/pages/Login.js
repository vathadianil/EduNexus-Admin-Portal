import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginCopyRight from "../components/LoginCopyRight";
import LoginForm from "../components/LoginForm";

// TODO remove, this demo shouldn't need to reset the theme.

const theme = createTheme();

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <LoginForm />
        <LoginCopyRight />
      </Container>
    </ThemeProvider>
  );
}
