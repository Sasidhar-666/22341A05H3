import React from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";
import { getUrls } from "../utils/storage";

export default function StatisticsPage() {
  const urls = getUrls();

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        URL Statistics
      </Typography>
      <List>
        {urls.map((u) => (
          <ListItem key={u.id}>
            <ListItemText
              primary={`${u.shortcode} → ${u.longUrl}`}
              secondary={`Created: ${u.createdAt} | Clicks: ${u.clicks.length}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
