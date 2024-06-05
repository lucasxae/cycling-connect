import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import Card from "../../components/Card/Card";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Limpa erros anteriores

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      const data = response.data;
      console.log(data);

      if (data.role != "ADMIN") {
        setError("Acesso negado. Apenas administradores podem fazer login.");
        return;
      }

      navigate("/planilhas");
      localStorage.setItem("token", data.token);
    } catch (error) {
      setError("Falha no login, verifique suas credenciais");
      console.error("Error:", error);
    }
  };

  return (
    <Card background="#ffffff">
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh", width: "100%" }}
        >
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <Card>
              <Typography
                style={{ color: "black" }}
                variant="h4"
                align="center"
              >
                Login
              </Typography>
              <form onSubmit={handleSignIn}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <Typography variant="body2" color="error">
                    {error}
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Entrar
                </Button>
              </form>
            </Card>
          </div>
        </Grid>
      </Container>
    </Card>
  );
}
