import connectMongoDB from "../../../../config/mongodb";
import Item from "@/app/models/itemSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const items = await Item.find();
        return NextResponse.json({ items }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch items", error: error }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const name = formData.get('name')?.toString();
        const category = formData.get('category')?.toString();
        const condition = formData.get('condition')?.toString();
        const status = formData.get('status')?.toString();
        const location = formData.get('location')?.toString();
        const college = formData.get('college')?.toString();
        const description = formData.get('description')?.toString();
        const image = formData.get('image')?.toString;

        await connectMongoDB();
        await Item.create({
            name,
            college,
            category,
            condition,
            status,
            location,
            description,
            image: image 
        });

        return NextResponse.json({ message: 'Item added successfully' }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error adding item' }, { status: 500 });
    }
}
