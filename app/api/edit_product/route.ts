import Product from "@/libs/models/Product";
import { connectToDatabase } from "@/libs/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectToDatabase();

        const body = await request.json();
        const { id } = params;
        const { name, category, price, description } = body;

        // Validate that all required fields are present in the request body
        if (!name || !category || !price || !description) {
            return NextResponse.json({
                message: "Missing required fields",
            }, {
                status: 400,
            });
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                category,
                price,
                description,
            },
            { new: true } // Return the updated document
        );

        if (!updatedProduct) {
            return NextResponse.json({
                message: "Product not found",
            }, {
                status: 404,
            });
        }

        return NextResponse.json(updatedProduct);
    } catch (error:any) {
        console.error("Error updating product:", error);
        return NextResponse.json({
            error: error.message,
            message: "Something went wrong",
        }, {
            status: 500,
        });
    }
}