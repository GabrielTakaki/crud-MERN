const upload = require('../../middleware/upload');
const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/search', require('./query'));
router.post('/', require('./create'));
router.get('/', require('./list'));
router.get('/:id', require('./findById'));
router.put('/:id', require('./update'));
router.delete('/:id', require('./remove'));
router.put('/:id/image', upload.single('image'), require('./upload'));

module.exports = router;
