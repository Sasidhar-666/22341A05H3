import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";
import { saveUrls, getUrls } from "../utils/storage";

export default function ShortenerPage() {
  const [urls, setUrls] = useState(getUrls());

  useEffect(() => {
    saveUrls(urls);
  }, [urls]);

  const handleAdd = (url) => {
    setUrls((prev) => [...prev, url]);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        URL Shortener
      </Typography>
      <UrlForm onAdd={handleAdd} />
      <UrlList urls={urls} />
    </Container>
  );
}
