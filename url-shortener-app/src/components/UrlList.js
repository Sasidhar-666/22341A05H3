import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

export default function UrlList({ urls }) {
  return (
    <List>
      {urls.map((u) => (
        <React.Fragment key={u.id}>
          <ListItem>
            <ListItemText
              primary={`http://localhost:3000/${u.shortcode}`}
              secondary={`Original: ${u.longUrl} | Expires in ${u.validity} min`}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}
