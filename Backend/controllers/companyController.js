import Company from "../models/companyModel.js";

export const registerCompany = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    const existingCompany = await Company.findOne({ name });
    if (existingCompany) {
      return res
        .status(400)
        .json({ success: false, message: "You can't register same company." });
    }

    const company = await Company.create({ name, userId });
    return res.status(200).json({
      success: true,
      company,
      message: "Company registered successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.user.id;
    const companies = await Company.find({ userId });
    if (companies.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No company found for this user.",
      });
    }

    return res.status(200).json({ success: true, companies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found.",
      });
    }

    return res.status(200).json({ success: true, company });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const { name, description, website, location, logo } = req.body;

    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found.",
      });
    }

    if (company.userId.toString() !== req.user.id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this company" });
    }

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (website !== undefined) updateData.website = website;
    if (location !== undefined) updateData.location = location;
    if (logo !== undefined) updateData.logo = logo;

    const updateCompany = await Company.findByIdAndUpdate(
      companyId,
      updateData,
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      company: updateCompany,
      message: "Company information updated.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
