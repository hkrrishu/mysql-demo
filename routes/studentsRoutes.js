const express = require("express");
const studnetController = require("../controller/studentController");
const router = express.Router();


router.post("/add",studnetController.addEntries);
router.put("/update/:id",studnetController.updateEntry);
router.delete("/delete/:id",studnetController.deleteEntry);
module.exports = router;