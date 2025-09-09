import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage";
import StatisticsPage from "./pages/StatisticsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatisticsPage />} />
        {/* Redirect shortcodes */}
        <Route path="/:shortcode" element={<RedirectHandler />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

function RedirectHandler() {
  const shortcode = window.location.pathname.split("/")[1];
  const urls = JSON.parse(localStorage.getItem("shortUrls")) || [];
  const urlObj = urls.find((u) => u.shortcode === shortcode);

  if (urlObj) {
    urlObj.clicks.push({ ts: new Date().toISOString() });
    localStorage.setItem("shortUrls", JSON.stringify(urls));
    window.location.href = urlObj.longUrl;
  } else {
    return <h2>Shortcode not found</h2>;
  }
}
