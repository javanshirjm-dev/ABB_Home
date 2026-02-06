import { NextResponse } from 'next/server';
import { connectDB } from '../../lib/db';
import { House } from '../../models/House';

export async function POST(req: Request) {
    try {
        await connectDB();

        // 1. Get data from the frontend
        const body = await req.json();
        const { title, description, price, image, percentage, yearDuration } = body;

        // 2. Simple Validation
        // We check if title.en exists to ensure they sent the language object
        if (!title?.en || !description?.en || !price || !image) {
            return NextResponse.json(
                { message: "Missing required fields (title.en, description.en, price, etc.)" },
                { status: 400 }
            );
        }

        // 3. Create the House
        const newHouse = await House.create({
            title,          // Saves { en: "...", az: "..." } automatically
            description,    // Saves { en: "...", az: "..." } automatically
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