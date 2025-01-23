import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parsing body JSON
    console.log('Received body:', body); // Log body untuk debugging

    const { answer } = body;
    console.log('Answer received:', answer)

    const correctAnswer = '';

    if (answer === correctAnswer) {
      return NextResponse.json({ correct: true });
    } else {
      return NextResponse.json({ correct: false });
    }
  } catch (error) {
    console.error('Error in API:', error);
    return NextResponse.json({ error: 'Invalid Request' }, { status: 400 });
  }
}
