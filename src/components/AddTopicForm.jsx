import React, { useState } from "react";

const AddTopicForm = ({ addTopic }) => {
  const [name, setName] = useState("");
  const [questionsSolved, setQuestionsSolved] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !questionsSolved) return;

    addTopic({
      id: Date.now(),
      name,
      questionsSolved: Number(questionsSolved),
      difficulty
    });

    setName("");
    setQuestionsSolved("");
    setDifficulty("Easy");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "30px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <input
        type="text"
        placeholder="Topic Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "12px",
          border: "none",
          background: "#1f1f1f",
          color: "#e0e0e0",
          boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #2a2a2a",
          flex: "1 1 200px"
        }}
      />
      <input
        type="number"
        placeholder="Questions Solved"
        value={questionsSolved}
        onChange={(e) => setQuestionsSolved(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "12px",
          border: "none",
          background: "#1f1f1f",
          color: "#e0e0e0",
          boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #2a2a2a",
          width: "160px"
        }}
      />
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "12px",
          border: "none",
          background: "#1f1f1f",
          color: "#e0e0e0",
          boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #2a2a2a",
          width: "130px"
        }}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          borderRadius: "12px",
          border: "none",
          background: "linear-gradient(90deg, #4caf50, #81c784)",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "0 4px 15px rgba(0,0,0,0.4)"
        }}
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopicForm;