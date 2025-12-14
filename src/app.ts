import express from "express";
// import cors from "cors";
// import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import sequelize from "./db/config";

const app = express();

// Middlewares
// app.use(cors());
app.use(express.json());
// app.use(morgan("dev"));

// Routes
// import userRoutes from "./routes/user.routes.js";
// app.use("/api/users", userRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "API is running 🚀" });
});

// Start server
const PORT = process.env.PORT || 3000;

async function bootstrap() {

  await sequelize.authenticate();
  console.log("✅ Database connected");
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

bootstrap();