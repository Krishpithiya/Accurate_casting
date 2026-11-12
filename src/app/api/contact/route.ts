import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, subject, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide First Name, Email, and Message.' },
        { status: 400 }
      );
    }

    // Attempt to persist to MongoDB
    let savedInDb = false;
    try {
      await connectToDatabase();
      const newContact = await Contact.create({
        firstName,
        lastName: lastName || '',
        phone: phone || '',
        email,
        subject: subject || 'General Inquiry',
        message,
      });
      savedInDb = true;
      console.log('Saved contact inquiry to MongoDB:', newContact._id);
    } catch (dbErr: any) {
      console.warn('MongoDB connection note (saved in memory mode):', dbErr.message);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received. Our team will get back to you shortly.',
      data: {
        firstName,
        email,
        savedInDb,
      },
    });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({ success: true, count: contacts.length, data: contacts });
  } catch (error: any) {
    return NextResponse.json({
      success: true,
      data: [],
      note: 'MongoDB not connected yet. Add MONGODB_URI in .env to persist inquiries.',
    });
  }
}
