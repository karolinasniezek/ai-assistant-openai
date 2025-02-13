import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [inputText, setInputText] = useState("");

  const getEmbedding = async () => {
    if (!text) return;

    const embeddingResponse = await fetch("http://localhost:8000/embedding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    });

    const embeddingData = await embeddingResponse.json();
    setResponse(JSON.stringify(embeddingData));
    setInputText(text); // Store the entered text for display
    setText(""); // Clear the input field after submission
  };
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1>AI Embedding Assistant</h1>
        <p>
          Generate embeddings from any word. Simply type in the text, and the AI
          will return the embeddings as an array.
        </p>
      </header>

      {inputText && (
        <div className={styles.inputText}>
          <strong>Word: </strong> <span>{inputText}</span>
        </div>
      )}

      {response && (
        <div className={styles.embeddingsContainer}>
          <div className={styles.responseBox}>
            <p>{response}</p>
          </div>
        </div>
      )}
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Enter your word..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.submitButton} onClick={getEmbedding}>
          Generate Embedding
        </button>
      </div>
    </div>
  );
};

export default App;
