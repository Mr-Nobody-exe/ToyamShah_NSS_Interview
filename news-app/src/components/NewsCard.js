import React from "react";

export default function NewsCard({ news }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
      {news.image_url && (
        <img
          src={news.image_url}
          alt="news"
          className="rounded-lg w-full h-40 object-cover mb-3"
        />
      )}
      <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
      <p className="text-sm text-gray-600 line-clamp-3">{news.description}</p>
      <a
        href={news.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium mt-3 inline-block"
      >
        Read more →
      </a>
    </div>
  );
}
