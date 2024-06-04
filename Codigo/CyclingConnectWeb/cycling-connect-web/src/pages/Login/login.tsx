import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://10.0.2.2:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log(data);

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
          />
        </div>

        <a href="#"></a>

        {error && <p className="error">{error}</p>}

        <button
          className="button"
          type="submit"
          onClick={() => navigate("/feedback")}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
