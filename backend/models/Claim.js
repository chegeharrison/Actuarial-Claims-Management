const mongoose = require("mongoose");

const ClaimSchema = new mongoose.Schema({
  policyHolder: String,
  amount: Number,
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  dateFiled: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Claim", ClaimSchema);
