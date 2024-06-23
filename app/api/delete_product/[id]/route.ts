import Product from "@/libs/models/Product";
import { connectToDatabase } from "@/libs/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const productToDelete = await Product.findById(params.id);
    console.log('product',productToDelete)
    if (!productToDelete) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    await productToDelete.deleteOne();
    return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error deleting product" }, { status: 500 });
  }
}
 
