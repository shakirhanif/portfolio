import Message from "../../models/Message";
import db from "../../Utils/db";
async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { name, phone, email, subject, message } = req.body;

  await db.connect();
  const newMessage = new Message({ name, phone, email, subject, message });
  const my_message = await newMessage.save();
  await db.disconnect();
  res.status(201).send({
    message: "Message sent successfully",
  });
}

export default handler;
