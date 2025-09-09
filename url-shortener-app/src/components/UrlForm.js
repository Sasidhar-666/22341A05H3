import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import useLogger from "../hooks/useLogger";

export default function UrlForm({ onAdd }) {
  const [longUrl, setLongUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");
  const logger = useLogger("frontend", "component");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!longUrl.startsWith("http")) {
      alert("Invalid URL");
      logger.error("Invalid URL entered");
      return;
    }

    const newUrl = {
      id: Date.now(),
      longUrl,
      validity: validity ? parseInt(validity, 10) : 30,
      shortcode: shortcode || Math.random().toString(36).substring(2, 7),
      createdAt: new Date(),
      clicks: []
    };

    onAdd(newUrl);
    logger.info(`Shortened URL created: ${newUrl.shortcode}`);

    setLongUrl("");
    setValidity("");
    setShortcode("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Long URL"
        fullWidth
        required
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Validity (minutes)"
        type="number"
        fullWidth
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Custom Shortcode"
        fullWidth
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Shorten URL
      </Button>
    </Box>
  );
}
