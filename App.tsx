
import React, { useEffect, useState } from "react";

const mottos = {
  en: [
    "You are not alone.",
    "Even stars need darkness to shine.",
    "Strength grows in the moments when you think you can't go on but you keep going anyway."
  ],
  zh: [
    "你并不孤单。",
    "即使是星星也需要黑暗才能闪耀。",
    "真正的力量是在你觉得走不下去却依然坚持的时候成长的。"
  ]
};

function getUserLang() {
  const lang = navigator.language || navigator.userLanguage;
  return lang.startsWith("zh") ? "zh" : "en";
}

function App() {
  const [lang, setLang] = useState(getUserLang());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mottos[lang].length);
    }, 5000);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to bottom right, #c7d2fe, #f0fdf4)",
      padding: "2rem",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Welcome to mottoyou
      </h1>

      <div style={{ fontSize: "1.2rem", maxWidth: "600px", color: "#374151" }}>
        {mottos[lang][index]}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <span style={{ marginRight: "0.5rem", color: "#6b7280" }}>Language:</span>
        <button onClick={() => setLang("en")} style={{ marginRight: "0.5rem" }}>
          English
        </button>
        <button onClick={() => setLang("zh")}>中文</button>
      </div>

      <footer style={{ marginTop: "3rem", fontSize: "0.75rem", color: "#9ca3af" }}>
        © {new Date().getFullYear()} mottoyou.com
      </footer>
    </div>
  );
}

export default App;
