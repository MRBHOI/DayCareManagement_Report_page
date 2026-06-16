// routes/auth.js
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (!user.rows.length) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.rows[0].password_hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.rows[0].id, role: user.rows[0].role },
        process.env.JWT_SECRET, { expiresIn: '8h' });
    res.json({ token });
});

module.exports = router;