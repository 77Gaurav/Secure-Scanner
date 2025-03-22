import { testSQLInjection } from './sqlScanner.js';
import { testXSS } from './headerScanner.js';
import { testNewVulnerability } from './newTest.js';

/**
 * Runs all security tests on the target URL.
 * @param {string} targetUrl - The URL to scan.
 * @returns {Promise<string[]>} - A list of vulnerabilities found.
 */
export const runSecurityTests = async (targetUrl) => {
  const vulnerabilities = [];

  // Run all tests
  const sqlResults = await testSQLInjection(targetUrl);
  if (sqlResults) vulnerabilities.push(sqlResults);

  const xssResults = await testXSS(targetUrl);
  if (xssResults) vulnerabilities.push(xssResults);

  const newTestResults = await testNewVulnerability(targetUrl);
  if (newTestResults) vulnerabilities.push(newTestResults);

  return vulnerabilities;
};

// Export individual test functions
export { testSQLInjection, testXSS, testNewVulnerability };