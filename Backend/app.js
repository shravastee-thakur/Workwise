import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import userRoute from "./routes/userRoute.js";
import companyRoute from "./routes/companyRoute.js";
import jobRoute from "./routes/jobRoute.js";
import applicationRoute from "./routes/applicationRoute.js";
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

//Routes
app.use("/api/v1/user", userRoute);
// http://localhost:3000/api/v1/user/register
app.use("/api/v1/company", companyRoute);
// http://localhost:3000/api/v1/company/registerCompany
app.use("/api/v1/job", jobRoute);
// http://localhost:3000/api/v1/job/postJob
app.use("/api/v1/application", applicationRoute);
// http://localhost:3000/api/v1/application/applyJob

export default app;
