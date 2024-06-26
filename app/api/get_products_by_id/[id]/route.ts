import Product from "@/libs/models/Product"
import { connectToDatabase } from "@/libs/mongoose"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
      await connectToDatabase();
      const { id } = params;
      const product = await Product.findById(id);
  
      if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }
  
      return NextResponse.json(product);
    } catch (error: any) {
      console.error("Error fetching product:", error);
      return NextResponse.json(
        {
          error: "Error fetching product",
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }