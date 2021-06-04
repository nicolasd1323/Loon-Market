import Vendor from "../models/vendor.js";

export const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getVendor = async (req, res) => {
  try {
    const { id } = req.params;
    const vendor = await Vendor.findById(id).populate("userId");
    if (vendor) {
      return res.json(vendor);
    }
    res.status(404).json({ message: "Vendor not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createVendor = async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.status(201).json(vendor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateVendor = async (req, res) => {
  const { id } = req.params;
  const vendor = await Vendor.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(vendor);
};

export const deleteVendor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Vendor.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Vendor deleted");
    }
    throw new Error("Vendor not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
