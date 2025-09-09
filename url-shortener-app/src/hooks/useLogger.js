import { logEvent } from "../api/logs";

export default function useLogger(stack = "frontend", pkg = "component") {
  return {
    debug: (msg) => logEvent(stack, "debug", pkg, msg),
    info: (msg) => logEvent(stack, "info", pkg, msg),
    warn: (msg) => logEvent(stack, "warn", pkg, msg),
    error: (msg) => logEvent(stack, "error", pkg, msg),
    fatal: (msg) => logEvent(stack, "fatal", pkg, msg)
  };
}
