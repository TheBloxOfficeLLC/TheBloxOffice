const express = require('express');
const router = express.Router();

/*
@route  Get api/posts/test
@desc   Tests posts route
@access Public
*/

/* Going to respond with some json */
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

/* a 200 status means every thing is okay */

module.exports = router;
