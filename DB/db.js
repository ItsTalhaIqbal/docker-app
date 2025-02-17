import mongoose from "mongoose";

 const connectDB = () => {
  mongoose.connect("mongodb+srv://ti709888:8oAZzoZ2vzno4RkG@cluster0.itczuex.mongodb.net/todo")
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
};

export {connectDB}