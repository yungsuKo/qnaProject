const express = require('express');
const router = express.Router();

router.get('/:id([0-9a-f]{24})', async (req, res, next)=>{
    return res.redirect("/");
})

module.exports = router;