import React from "react";

export default function LanguageSelector({ setLanguage }) {
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    { code: "mr", label: "Marathi" },
  ];

  return (
    <div className="flex justify-center mb-4">
      <select
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 border rounded-lg shadow"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
