import React from "react";

const page = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/diabetes_progression_prediction.html" // Path to the HTML file
        style={{ width: "100%", height: "100%" }}
        frameBorder="0"
      />
    </div>
  );
};

export default page;
