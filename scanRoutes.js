import express from 'express';
import { initiateScan, getScanHistory, getScanById } from '../controllers/scanController.js';

const router = express.Router();

// POST /api/scans - Initiate a new scan
router.post('/scans', initiateScan);

// GET /api/scans - Get scan history
router.get('/scans', getScanHistory);

// GET /api/scans/:id - Get a specific scan
router.get('/scans/:id', getScanById);

export default router;