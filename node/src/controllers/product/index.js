const express = require('express');

const router = express.Router({ mergeParams: true });

router.post('/', require('./create'));
router.get('/', require('./list'));
router.get('/:id', require('./findById'));
router.put('/:id', require('./update'));
router.delete('/:id', require('./remove'));

module.exports = router;
