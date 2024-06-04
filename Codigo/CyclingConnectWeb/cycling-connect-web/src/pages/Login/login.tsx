import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

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

      if (data.role !== "ADMIN") {
        setError("Acesso negado. Apenas administradores podem fazer login.");
        return;
      }

      localStorage.setItem("token", data.token);

      navigate("/planilhas");
    } catch (error) {
      setError("Falha no login, verifique suas credenciais");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSignIn}>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button className="button" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
