import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: [
      {
        type: String,
      },
    ],
    salary: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", // one job belongs to one company so one-to-one
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // user/recruiter created a job
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application", // many users for many jobs many-to-many
      },
    ],
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
