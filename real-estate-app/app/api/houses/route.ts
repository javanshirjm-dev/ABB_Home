import { NextResponse } from 'next/server';
import { connectDB } from '../../lib/db';
import { House } from '../../models/House';

export async function POST(req: Request) {
    try {
        await connectDB();

        const body = await req.json();
        const { title, description, price, image, percentage, yearDuration } = body;

        if (!title?.en || !description?.en || !price || !image) {
            return NextResponse.json(
                { message: "Missing required fields (title.en, description.en, price, etc.)" },
                { status: 400 }
            );
        }

        const newHouse = await House.create({
            title,
            description,
            price,
            image,
            percentage,
            yearDuration
        });

        return NextResponse.json({ message: "House Created", house: newHouse }, { status: 201 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error creating house", error }, { status: 500 });
    }
}