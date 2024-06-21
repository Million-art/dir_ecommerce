import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/mongoose";
import Product from "@/libs/models/Product";

export async function POST(request: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();
 
    // Get the form data
    const formData = await request.formData();

    // Extract the required fields from the form data
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");
    const category = formData.get("category");
    const imgSrc = formData.get("imgSrc");
    const rating = 0
 
    // Validate the data
    if (!name || !price || !description || !category || !imgSrc) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create a new product document
    const product = new Product({
      name: name.toString(),
      price: parseFloat(price.toString()),
      description: description.toString(),
      category: category.toString(),
      imgSrc: imgSrc.toString(),
      rating: rating
     });

    // Save the product to the database
    await product.save();

    // Return a success response
    return NextResponse.json({ message: "Product added successfully", product }, { status: 201 });
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json({ error: "Error adding product" }, { status: 500 });
  }
}