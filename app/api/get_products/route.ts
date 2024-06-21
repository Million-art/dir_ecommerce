import Product from "@/libs/models/Product"
import { connectToDatabase } from "@/libs/mongoose"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectToDatabase();
        const products = await Product.find();
        return NextResponse.json(products);
    } catch (error:any) {
        console.error("Error fetching products:", error);
        return NextResponse.json({
            error: "Error fetching products",
            message: error.message  
        }, {
            status: 500
        });
    }
}