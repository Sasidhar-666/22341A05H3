import axios from "axios";

const LOGS_URL = "http://20.244.56.144/evaluation-service/logs";

// token should be set once after auth
let AUTH_TOKEN = "";

export const setAuthToken = (token) => {
  AUTH_TOKEN = token;
};

export const logEvent = async (stack, level, pkg, message) => {
  try {
    const res = await axios.post(
      LOGS_URL,
      { stack, level, package: pkg, message },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AUTH_TOKEN}`
        }
      }
    );
    return res.data;
  } catch (err) {
    console.error("Logging failed", err.message);
  }
};
