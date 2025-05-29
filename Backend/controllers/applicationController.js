import Application from "../models/applicationModel.js";
import Job from "../models/jobModel.js";

// Users apply to jobs.
export const applyJob = async (req, res, next) => {
  try {
    const applicantId = req.user.id;
    const { jobId } = req.body;

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ error: "Job not found" });

    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: applicantId,
    });
    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
      });
    }

    const newApplication = await Application.create({
      job: jobId,
      applicant: applicantId,
    });
    return res
      .status(201)
      .json({ success: true, newApplication, message: "Applied successfully" });
  } catch (error) {
    next(error);
  }
};

// Get all applications for a user
export const getAppliedJobs = async (req, res, next) => {
  try {
    const applicantId = req.user.id;

    const Applications = await Application.find({ applicant: applicantId })
      .populate("job")
      .sort({ createdAt: -1 });

    if (Applications.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No applications found",
      });
    }
    return res.status(201).json({ success: true, Applications });
  } catch (error) {
    next(error);
  }
};

// Recruiters view applicants
export const getAllApplications = async (req, res, next) => {
  try {
    // Give all applications for this job id
    const jobId = req.params.id;

    const Applications = await Application.find({ job: jobId })
      .populate("applicant", "-password")
      .sort({ createdAt: -1 });
    if (Applications.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No applications found",
      });
    }

    return res.status(201).json({ success: true, Applications });
  } catch (error) {
    next(error);
  }
};

// Admins update application status.
export const updateApplicationStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    const updatedApplication = await Application.findByIdAndUpdate(
      applicationId,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({ error: "Application not found" });
    }

    return res.status(200).json({
      success: true,
      updatedApplication,
      message: "Status updated successfullly",
    });
  } catch (error) {
    next(error);
  }
};
