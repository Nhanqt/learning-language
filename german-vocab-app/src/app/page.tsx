"use client";

import { useState } from "react";
import wordsData from "./data/words.json";

type Word = {
  german: string;
  vietnam: string;
};


export default function HomePage() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [results, setResults] = useState<{ [key: string]: string }>({});

  const handleChange = (vietnam: string, value: string) => {
    setAnswers({ ...answers, [vietnam]: value });
  };

  const handleSubmit = () => {
    const newResults: { [key: string]: string } = {};
    wordsData.forEach((word: Word) => {
      const answer = answers[word.vietnam]?.trim().toLowerCase() || "";
      const correct = word.german.trim().toLowerCase();
      if (answer === correct) {
        newResults[word.vietnam] = "✅ Correct!";
      } else {
        newResults[word.vietnam] = `❌ Wrong! Correct: ${word.german}`;
      }
    });
    setResults(newResults);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        🇩🇪 Learn German Vocabulary 🇻🇳
      </h1>

      <table className="w-full border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Vietnamese</th>
            <th className="p-2 border">German (Your Answer)</th>
            <th className="p-2 border">Result</th>
          </tr>
        </thead>
        <tbody>
          {wordsData.map((word: Word) => (
            <tr key={word.vietnam} className="text-center">
              <td className="border p-2">{word.vietnam}</td>
              <td className="border p-2">
                <input
                  type="text"
                  className="border rounded p-1 w-full text-center"
                  value={answers[word.vietnam] || ""}
                  onChange={(e) => handleChange(word.vietnam, e.target.value)}
                />
              </td>
              <td className="border p-2 text-sm">
                {results[word.vietnam] || ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
}
