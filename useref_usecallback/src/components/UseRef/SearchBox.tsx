import { useRef, useEffect } from "react";
import "./SearchBox.css";

export const SearchBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Cuando se monta el componente, enfoca el input
    inputRef.current?.focus();
  }, []);

  return (
    <div className="container">
      <h2>🔍 Buscar producto</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Escribe algo aquí..."
        className="input"
      />
    </div>
  );
};

export default SearchBox;
