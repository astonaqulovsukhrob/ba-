import mongoose from "mongoose";

const mongoURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/mydatabase";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};
