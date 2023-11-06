import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const saveNameToDatabase = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/salvarPessoa", {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        // Nome foi salvo com sucesso no banco de dados
        console.log("Nome salvo com sucesso");
      } else {
        // Lidar com erros, se necessário
        console.error("Erro ao salvar o nome no banco de dados");
        console.log(name);
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value); // Atualiza o estado 'name' com o valor do campo de entrada
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label htmlFor="name">Insira seu nome</label>
          <br></br>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleNameChange}
          />
          <button type="submit" onClick={saveNameToDatabase}>
            Salvar
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
