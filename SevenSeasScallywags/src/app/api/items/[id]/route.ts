import connectMongoDB from "../../../../../config/mongodb";
import Item from "@/app/models/itemSchema";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
    params: { id: string };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        const { id } = params;

        await connectMongoDB();
        const item = await Item.findById(id);

        if (!item) {
            return NextResponse.json({ message: "Item not found" }, { status: 404 });
        }

        return NextResponse.json({ item }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch item", error }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
        const { id } = params;

        await connectMongoDB();
        const deletedItem = await Item.findByIdAndDelete(id);

        if (!deletedItem) {
            return NextResponse.json({ message: "Item not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Item deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete item", error }, { status: 500 });
    }
}
