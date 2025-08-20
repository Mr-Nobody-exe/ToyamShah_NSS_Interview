import React, { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";
import LanguageSelector from "./components/LanguageSelector";

const API_KEY = "pub_9ebc9adfb4f849d1bee053a1c006e4e8";
// Get api key from the following link:
//Link - https://newsdata.io/

function App() {
  const [news, setNews] = useState([]);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=${language}`)
      .then((res) => res.json())
      .then((data) => setNews(data.results || []))
      .catch((err) => console.error("Error fetching news:", err));
  }, [language]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">News App</h1>
      <LanguageSelector setLanguage={setLanguage} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {news.map((item, index) => (
          <NewsCard key={index} news={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
