const router = require('express').Router();
const pool = require('../db');

router.get('/kpis', async (req, res) => {
    const revenue = await pool.query(
        `SELECT SUM(amount) AS total FROM revenue WHERE month = 'Apr-2025'`
    );
    const registrations = await pool.query(
        `SELECT COUNT(*) FROM registrations
     WHERE DATE_TRUNC('month', registered_at) = DATE_TRUNC('month', NOW())`
    );
    const sessions = await pool.query(`SELECT COUNT(*) FROM sessions`);

    res.json({
        totalRevenue: revenue.rows[0].total,
        newRegistrations: registrations.rows[0].count,
        activeSessions: sessions.rows[0].count,
        avgResponseTime: 2.4  // can be computed from a response_logs table
    });
});

module.exports = router;