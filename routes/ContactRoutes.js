import express from "express";
// import ContactModel from "../models/ContactModel.js";
import { contactMessages, getMessages, deleteMessages } from "./../controllers/ContactControllers.js";
const router = express.Router();

// Send Messages in Database
router.post("/", contactMessages);

// Get Message
router.get("/getmessages", getMessages);

// Delete Message
router.delete("/:id", deleteMessages);
export default router;
