import { useRef, useState } from "react";

export const PasswordWithBlur = () => {
  const [password, setPassword] = useState("");
  const previousPasswordRef = useRef<string>("");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    previousPasswordRef.current = password; // Guarda la anterior
    setPassword(e.target.value);            // Actualiza la nueva
    console.log("Input perdió el foco, valor capturado:", e.target.value);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h2>🔒 Contraseña con onBlur</h2>
      <input
        type="password"
        placeholder="Escribe tu nueva contraseña"
        onBlur={handleBlur}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          display: "block",
        }}
      />

      <p><strong>Última contraseña guardada:</strong> {password}</p>
      <p><strong>Contraseña anterior (ref):</strong> {previousPasswordRef.current}</p>
    </div>
  );
};

