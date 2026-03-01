import React from "react";

const ProgressBar = ({ topics, goal }) => {
  const total = topics.reduce((acc, curr) => acc + curr.questionsSolved, 0);
  const progress = Math.min((total / goal) * 100, 100);

  return (
    <div style={{ margin: "30px 0" }}>
      <h3 style={{ marginBottom: "10px", color: "#81c784", fontWeight: 600 }}>
        Progress: {total} / {goal} Questions
      </h3>
      <div style={{
        width: "100%",
        background: "#121212",
        height: "25px",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "inset 3px 3px 8px #0d0d0d, inset -3px -3px 8px #2a2a2a"
      }}>
        <div style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #4caf50, #81c784)",
          height: "100%",
          borderRadius: "15px",
          transition: "width 0.4s ease-in-out"
        }} />
      </div>
    </div>
  );
};

export default ProgressBar;