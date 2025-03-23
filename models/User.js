import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true, // Ensure name is mandatory
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true, // For authentication
  },
  role: {
    type: String,
    enum: ["student", "instructor", "admin"], // Define roles
    default: "student",
  },
  image: {
    type: String,
  },

  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // Reference to courses the user is enrolled in
    },
  ],
  progress: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      completedLessons: {
        type: Number,
        default: 0,
      },
      totalLessons: {
        type: Number,
        default: 0,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
