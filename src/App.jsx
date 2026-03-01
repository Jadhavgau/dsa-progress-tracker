import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import AddTopicForm from "./components/AddTopicForm.jsx";
import TopicList from "./components/TopicList.jsx";
import ProgressBar from "./components/ProgressBar.jsx";

function App() {
  const [topics, setTopics] = useState(
    () => JSON.parse(localStorage.getItem("topics")) || [],
  );
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("topics", JSON.stringify(topics));
  }, [topics]);

  const addTopic = (topic) => setTopics([...topics, topic]);
  const deleteTopic = (id) => setTopics(topics.filter((t) => t.id !== id));
  const editTopic = (id, updatedQuestions) => {
    setTopics(
      topics.map((t) =>
        t.id === id ? { ...t, questionsSolved: updatedQuestions } : t,
      ),
    );
  };

  const filteredTopics =
    filter === "All" ? topics : topics.filter((t) => t.difficulty === filter);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        padding: "20px",
        boxSizing: "border-box",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          margin: "auto", 
          padding: "20px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          background: "#1a1a1a",
          color: "#e0e0e0",
          borderRadius: "15px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          boxSizing: "border-box",
          minHeight: "200px",
        }}
      >
        <Header />
        <AddTopicForm addTopic={addTopic} darkMode />
        <ProgressBar topics={topics} goal={2000} />

        <div style={{ textAlign: "right" }}>
          <label style={{ marginRight: "10px", fontWeight: 500 }}>
            Filter by Difficulty:
          </label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1px solid #333",
              background: "#1f1f1f",
              color: "#e0e0e0",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <TopicList
          topics={filteredTopics}
          deleteTopic={deleteTopic}
          editTopic={editTopic}
          darkMode
        />
      </div>
    </div>
  );
}

export default App;
