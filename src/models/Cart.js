import mongoose from "mongoose";
import ObjectId from "mongoose.Schema.Type.ObjectId";

const CartSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
    items: [
      {
        itemId: {
          type: ObjectId,
          ref: "Item",
          required: true,
        },
        name: String,
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
        price: Number,
      },
    ],
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", CartSchema);

export default new Cart();
