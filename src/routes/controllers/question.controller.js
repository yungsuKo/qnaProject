const express = require('express');
const router = express.Router();

router.get("/:id", async(req, res, next)=>{
    return res.render("screens/question");
})

module.exports = router;