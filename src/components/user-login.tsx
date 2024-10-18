import React, { useState } from "react";

interface UserLoginProps {
  onLoginSuccess: () => void;
}

export const UserLogin: React.FC<UserLoginProps> = ({ onLoginSuccess }) => {
  const [identification, setIdentification] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleIdentificationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIdentification(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const mockIdentification = "usuario";
    const mockPassword = "senha123";

    if (identification === mockIdentification && password === mockPassword) {
      console.log("Login bem-sucedido");
      onLoginSuccess();
    } else {
      setError("Identificação ou senha incorretas");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label htmlFor="identification">Número de Identificação:</label>
        <input
          type="text"
          id="identification"
          value={identification}
          onChange={handleIdentificationChange}
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
