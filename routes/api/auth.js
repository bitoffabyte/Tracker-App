const express = require('express');
const router = express.Router();

// @route       GETapi/auth
// @describe    test route
// @access      public
router.get('/', (req, res) => res.send('auth route'));
module.exports = router;
