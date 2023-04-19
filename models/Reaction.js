const moment = require("moment");
const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    min_length: 1,
    max_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (dateStamp) => moment(dateStamp).format("MMM DD, YYYY [at] hh:mm a"),
  },
});

module.exports = reactionSchema;
