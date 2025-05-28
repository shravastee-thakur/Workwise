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
        trim: true,
        minlength: 2,
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

jobSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    try {
      const jobId = this._id;
      await mongoose
        .model("Application")
        .deleteMany({ _id: { $in: this.applications } });
      next();
    } catch (error) {
      next(error);
    }
  }
);
const Job = mongoose.model("Job", jobSchema);
export default Job;
