import mongoose from "mongoose";
// Define the User schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

// Create an index on the age field
UserSchema.index({ age: 1 });

// Export the User model
export default mongoose.model('User', UserSchema);
