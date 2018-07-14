const express = require('express');
const router = express.Router();
const xray = require('x-ray');
const cors = require('cors');

const x = xray();
router.all('*', cors());


// @route    GET api/jobs/test
// @desc     Test jobs route
// @access   Public
router.get('/test', (req, res) => res.json({ msg: 'Jobs works' }));

router.get('/:jobid', (req, res) => {
    x(`http://ba.jooble.org/desc/${req.params.jobid}`,
        '.desc_text_paragraph@html')
        .then(data => {
            // console.log(data);
            return res.json(data);
        });

    // return res.json({ msg: 'OK' });
});


module.exports = router;