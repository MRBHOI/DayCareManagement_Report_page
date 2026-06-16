const router = require('express').Router();
const pool = require('../db');

// Centers by location → pie chart data
router.get('/centers-by-location', async (req, res) => {
    const result = await pool.query(
        `SELECT city, COUNT(*) AS count FROM centers GROUP BY city`
    );
    res.json(result.rows);
    // → [{ city: 'Mumbai', count: 8 }, { city: 'Delhi', count: 6 }, ...]
});

// User growth trends → bar chart data
router.get('/user-growth', async (req, res) => {
    const result = await pool.query(
        `SELECT DATE_TRUNC('month', created_at) AS month, COUNT(*) AS total
     FROM users GROUP BY month ORDER BY month`
    );
    res.json(result.rows);
});

module.exports = router;