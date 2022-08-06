import mongoose from "mongoose";
// Declare the Schema of the Mongo model
const ContactModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { collection: "Messages" }
);

//Export the model
export default mongoose.model("ContactModel", ContactModel);
