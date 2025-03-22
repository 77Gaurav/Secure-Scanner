import axios from 'axios';
import { SQLI_PAYLOADS } from '../utils/payloads.js';

// sqlScanner.js
export const testSQLInjection = async (targetUrl) => {
  // Example SQL injection test logic
  try {
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: "' OR '1'='1" }), // SQL injection payload
    });

    const data = await response.json();

    // Check if the response indicates a vulnerability
    if (data.vulnerable) {
      return { type: 'SQL Injection', severity: 'High', details: data };
    }
  } catch (error) {
    console.error('SQL Injection test failed:', error);
  }

  return null; // No vulnerability found
};