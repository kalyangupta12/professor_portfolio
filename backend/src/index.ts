import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import prisma from "./config/db"
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello, Express with TypeScript!")
})
app.post("/api/contact", async (req, res) => {

  try{
    const { name, email, subject, message } = req.body;

    if(!name || !email || !subject || !message) {
      res.status(400).json({ error: "All fields are required." });
      return;
    }
    const contactForm = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    })
    if (!contactForm) {
      res.status(500).json({ error: "Failed to submit the form." });
      return;
    }
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

