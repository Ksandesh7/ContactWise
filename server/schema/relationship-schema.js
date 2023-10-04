// relationship-schema.js
import mongoose from 'mongoose';

const relationshipSchema = new mongoose.Schema({
  type: String, // Relationship type (e.g., "family," "friend," "colleague")
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Reference to the User model
  },
});

export default mongoose.model('Relationship', relationshipSchema);
