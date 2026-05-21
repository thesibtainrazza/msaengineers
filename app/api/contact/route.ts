import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, message } = body;

    // Basic validation
    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'First name and email are required.' },
        { status: 400 }
      );
    }
    
    console.log(`Received message from ${firstName} ${lastName} (${phone}): ${message}`);

    // In a real-world scenario, you would integrate Resend, Nodemailer, or your CMS here.
    // Example: 
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'msaengineer.contractors@gmail.com',
    //   subject: `New Contact from ${firstName}`,
    //   html: `<p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`
    // });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
