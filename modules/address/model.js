var schema = {
  created_at: {
    type: Date,
    default: Date.now
  },
  created_by: {
    type: String,
    required: true
  }
};
