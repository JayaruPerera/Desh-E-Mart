
import formidable from 'formidable';
import dbConnect from '../../../src/lib/db';
import Product from '../../../models/Product';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const products = await Product.find({});
                res.status(200).json({ success: true, data: products });
            } catch (error) {
                console.error('Error fetching products:', error);
                res.status(400).json({ success: false, error: error.message });
            }
            break;

        

        case 'POST':
            try {
                const form = formidable({ multiples: false });

                const [fields, files] = await new Promise((resolve, reject) => {
                    form.parse(req, (err, fields, files) => {
                        if (err) reject(err);
                        resolve([fields, files]);
                    });
                });

                console.log("fields",fields)
                

                // Convert price to a number
                const price = parseFloat(fields.price[0]);

                // Prepare the product data
                const productData = {
                    title: fields.title[0],
                    category: fields.category[0],
                    price: price,  // Ensure price is a number
                    description: fields.description[0],
                    image: fields.image[0]
                    // image: files.image && files.image[0] ? files.image[0].filepath : undefined, // Handle image path
                };

                // Log the final product data
                console.log('Product data:', productData);

                // Validate required fields
                if (!productData.title || !productData.category  || !productData.price || !productData.description  || !productData.image) {
                    return res.status(400).json({ success: false, message: 'Missing required fields' });
                }

                // Create the product in the database
                const product = await Product.create(productData);
                res.status(201).json({ success: true, data: product });
            } catch (error) {
                console.error('Error adding product:', error);
                res.status(400).json({ success: false, error: error.message });
            }
            break;

    }
}


