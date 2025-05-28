import Job from "../models/jobModel.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      position,
      companyId,
    } = req.body;
    const userId = req.user.id;

    if (!companyId) {
      return res.status(400).json({ message: "Company ID is required" });
    }

    const job = await Job.create({
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      position,
      company: companyId,
      createdBy: userId,
    });

    return res.status(201).json({
      success: true,
      job,
      message: "New job created successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const userId = req.user.id;
    const { search } = req.query;

    const query = { createdBy: userId };

    if (search) {
      const regex = new RegExp(search, "i"); // case-insensitive
      query.$or = [
        { title: regex },
        { location: regex },
        { position: regex },
        { description: regex },
      ];
    }

    const allJobs = await Job.find(query).populate("company", "name");

    if (allJobs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Jobs not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: allJobs,
      totalJobs: allJobs.length,
      message: "Jobs fetched successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId)
      .populate("company", "name")
      .populate("createdBy", "name email")
      .populate("applications", "user status");

    return res.status(200).json({ success: true, job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      position,
    } = req.body;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found.",
      });
    }

    if (job.createdBy.toString() !== req.user.id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this job" });
    }

    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (requirements !== undefined) updateData.requirements = requirements;
    if (salary !== undefined) updateData.salary = salary;
    if (location !== undefined) updateData.location = location;
    if (jobType !== undefined) updateData.jobType = jobType;
    if (position !== undefined) updateData.position = position;

    const updatedJob = await Job.findByIdAndUpdate(jobId, updateData, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      success: true,
      job: updatedJob,
      message: "Jobs updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    if (job.createdBy.toString() !== req.user.id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this job" });
    }

    await job.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Job and related data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
