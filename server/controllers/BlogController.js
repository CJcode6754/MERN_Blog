import fs from "fs";
import imagekit from "../config/imageKit.js";
import Blog from "../models/Blog.js";
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );

    const imageFile = req.file;

    // Check if all fields are present
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload Image to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // Optimize the Image
    const optimizeImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        {
          quality: "auto", //Auto Compression
        },
        {
          format: "webp", // Convert to modern format
        },
        {
          width: "1280", // Resize Image
        },
      ],
    });

    const image = optimizeImageUrl;

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.json({ success: true, message: "Blog added succesfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


