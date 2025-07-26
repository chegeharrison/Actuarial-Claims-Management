const express = require("express");
const router = express.Router();
const Claim = require("../models/Claim");

// GET all claims
router.get("/", async (req, res) => {
  try {
    const claims = await Claim.find();
    res.json(claims);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch claims" });
  }
});

// POST create new claim
router.post("/", async (req, res) => {
  try {
    const newClaim = new Claim(req.body);
    const savedClaim = await newClaim.save();
    res.status(201).json(savedClaim);
  } catch (error) {
    res.status(400).json({ error: "Failed to create claim", details: error.message });
  }
});

// PUT update a claim
router.put("/:id", async (req, res) => {
  try {
    const updatedClaim = await Claim.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedClaim);
  } catch (error) {
    res.status(400).json({ error: "Failed to update claim", details: error.message });
  }
});

// DELETE a claim
router.delete("/:id", async (req, res) => {
  try {
    await Claim.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete claim", details: error.message });
  }
});

module.exports = router;
