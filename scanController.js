/* import ScanResult from '../models/ScanResult.js';
import { runSecurityTests } from '../services/scanner.js';

// POST /api/scans - Initiate a new scan
export const initiateScan = async (req, res) => {
  try {
    const { targetUrl } = req.body;

    // Run security tests
    const vulnerabilities = await runSecurityTests(targetUrl);

    // Save results to database
    const scanResult = new ScanResult({ targetUrl, vulnerabilities });
    await scanResult.save();

    res.status(201).json({
      status: 'success',
      data: scanResult,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to initiate scan',
    });
  }
};

// GET /api/scans - Get scan history
export const getScanHistory = async (req, res) => {
  try {
    const scans = await ScanResult.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: 'success',
      data: scans,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch scan history',
    });
  }
};

// GET /api/scans/:id - Get a specific scan
export const getScanById = async (req, res) => {
  try {
    const scan = await ScanResult.findById(req.params.id);
    if (!scan) {
      return res.status(404).json({
        status: 'error',
        message: 'Scan not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: scan,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch scan',
    });
  }
}; */
import { testSQLInjection, testXSS, testNewVulnerability } from '../services/scanner.js';

export const scanUrl = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const sqlResults = await testSQLInjection(url);
    const xssResults = await testXSS(url);
    const newTestResults = await testNewVulnerability(url);

    const vulnerabilities = [];
    if (sqlResults) vulnerabilities.push('SQL Injection');
    if (xssResults) vulnerabilities.push('XSS');
    if (newTestResults) vulnerabilities.push('New Vulnerability');

    const isSecure = vulnerabilities.length === 0;
    res.json({ isSecure, vulnerabilities });
  } catch (error) {
    console.error('Error scanning URL:', error);
    res.status(500).json({ error: 'An error occurred while scanning the URL.' });
  }
};