import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    name: String,
    url: String,
  },
  { timestamps: true }
);
export default mongoose.model("cards", cardSchema);
