const userSchema = new mongoose.Schema({
  // existing fields...
  isMentor: { type: Boolean, default: false },
  expertise: [String],
  menteeRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});