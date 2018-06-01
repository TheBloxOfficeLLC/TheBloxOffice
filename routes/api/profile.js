const express = require('express');
const router = express.Router();

/*
@route  Get api/profile/test
@desc   Tests profile route
@access Public
*/

/* Going to respond with some json */
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

/* a 200 status means every thing is okay */

module.exports = router;
