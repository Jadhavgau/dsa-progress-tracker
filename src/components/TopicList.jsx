import React, { useState } from "react";

const TopicList = ({ topics, deleteTopic, editTopic }) => {
  const [editingId, setEditingId] = useState(null);
  const [updatedQuestions, setUpdatedQuestions] = useState("");

  return (
    <div>
      {topics.length === 0 && <p style={{ textAlign: "center", fontStyle: "italic", color: "#aaa" }}>No topics added yet.</p>}
      
      {topics.map((topic) => (
        <div
          key={topic.id}
          style={{
            background: "#1f1f1f",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "15px",
            boxShadow: "8px 8px 20px #0d0d0d, -8px -8px 20px #2a2a2a",
            transition: "transform 0.2s",
          }}
        >
          <h3 style={{ marginBottom: "8px", color: "#81c784" }}>{topic.name}</h3>
          <p style={{ marginBottom: "12px", fontWeight: 500 }}>Difficulty: {topic.difficulty}</p>

          {editingId === topic.id ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="number"
                value={updatedQuestions}
                onChange={(e) => setUpdatedQuestions(e.target.value)}
                style={{
                  padding: "8px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#121212",
                  color: "#e0e0e0",
                  width: "100px",
                  boxShadow: "inset 3px 3px 8px #0d0d0d, inset -3px -3px 8px #2a2a2a"
                }}
              />
              <button
                onClick={() => { editTopic(topic.id, Number(updatedQuestions)); setEditingId(null); }}
                style={{
                  padding: "8px 12px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#4caf50",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Save
              </button>
              <button
                onClick={() => setEditingId(null)}
                style={{
                  padding: "8px 12px",
                  borderRadius: "10px",
                  border: "1px solid #333",
                  background: "#121212",
                  color: "#e0e0e0",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p>Questions Solved: <strong>{topic.questionsSolved}</strong></p>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => { setEditingId(topic.id); setUpdatedQuestions(topic.questionsSolved); }}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#2196f3",
                    color: "white",
                    cursor: "pointer"
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTopic(topic.id)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#f44336",
                    color: "white",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicList;