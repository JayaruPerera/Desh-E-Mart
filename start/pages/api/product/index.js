import formidable from "formidable"; //Handles file uploads and form data parsing.
import dbConnect from "../../../src/lib/db"; //Connects to the MongoDB database.
import Product from "../../../models/Product"; //Represents the Product model in MongoDB.

// This is a Next.js API route that handles products in a MongoDB database. It supports:
// ✅ GET - Fetch all products
// ✅ POST - Add a new product with form data
// ✅ Uses Formidable to handle form submissions instead of Next.js bodyParser.

//Disables default Next.js body parsing (because formidable will handle it)
export const config = {
  api: {
    bodyParser: false,
  },
};

//Extracts HTTP method from req.Connects to MongoDB before handling requests.
export default async function handler(req, res) {
  const { method } = req;   //Extracts the HTTP method from the request.
  await dbConnect();   //Connects to the MongoDB database using the dbConnect function.

  //Handle GET Request - Fetch All Products
  switch (method) {
    case "GET":
        try {
            if (req.query.id) {
              // Fetch single product
              const product = await Product.findById(req.query.id);
              if (!product) {
                return res.status(404).json({ success: false, message: "Product not found" });
              }
              return res.status(200).json({ success: true, data: product });
            }
            // Fetch all products
            const products = await Product.find({});
            res.status(200).json({ success: true, data: products });
          } catch (error) {
            console.error("Error fetching products:", error);
            res.status(400).json({ success: false, error: error.message });
          }
          break;

//Handle POST Request - Add New Product
    case "POST":
      try {
        const form = formidable({ multiples: false });

        //Creates a formidable instance to parse form data.
        const [fields, files] = await new Promise((resolve, reject) => {   //Parses form data into fields (text data) and files (uploaded files).
          form.parse(req, (err, fields, files) => { //Parses the incoming request.
            if (err) reject(err);  //Rejects the promise if there's an error.
            resolve([fields, files]);  //Resolves the promise with fields and files.
          });
        });

        console.log("fields", fields); //Logs the parsed fields for debugging.

        // Converts price from string to number for consistency.
        const price = parseFloat(fields.price[0]);

        // Prepare the product data
        //Extracts necessary fields (title, category, price, description, image).
        const productData = {
          title: fields.title[0],
          category: fields.category[0],
          price: price, // Ensure price is a number
          description: fields.description[0],
          image: fields.image[0],
          // image: files.image && files.image[0] ? files.image[0].filepath : undefined, // Handle image path
        };

        // Logs the product data before saving.
        console.log("Product data:", productData);

        // Validate required fields
        //Checks if any field is missing and returns an error (400 Bad Request).
        if (
          !productData.title ||
          !productData.category ||
          !productData.price ||
          !productData.description ||
          !productData.image
        ) {
          return res  //Returns an error response if any field is missing.
            .status(400)
            .json({ success: false, message: "Missing required fields" }); 
        }

        // Create the product in the database
        const product = await Product.create(productData);   //Creates a new product in MongoDB using Product.create(productData).
        res.status(201).json({ success: true, data: product });   //Returns success response (201 Created) with new product data
      } catch (error) {
        console.error("Error adding product:", error);
        res.status(400).json({ success: false, error: error.message });  //Handles errors properly (400 Bad Request).
      }
      break;

      case "DELETE":
      try {
        const { id } = req.query;
        const deletedProduct = await Product.findByIdAndDelete(id);
        
        if (!deletedProduct) {
          return res.status(404).json({ success: false, message: "Product not found" });
        }
        
        res.status(200).json({ success: true, data: deletedProduct });
      } catch (error) {
        console.error("Error deleting product:", error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;

      case "PUT":
    try {
      const { id } = req.query;
      const form = formidable({ multiples: false });

      const [fields] = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve([fields]);
        });
      });

      const price = parseFloat(fields.price[0]);
      const updateData = {
        title: fields.title[0],
        category: fields.category[0],
        price: price,
        description: fields.description[0],
        image: fields.image[0],
      };

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }

      res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(400).json({ success: false, error: error.message });
    }
    break;

  }
}
