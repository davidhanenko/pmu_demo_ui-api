import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import prismadb from '@/lib/prismadb';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  // secure:
  //   process.env.NODE_ENV == 'production' ? true : false,
});

export async function POST(req: Request) {
  try {
    const { name, phoneNumber, email, message, reason } =
      await req.json();

    const contactsData =
      await prismadb.contacts.findFirst();

    const sendEmailTo = contactsData?.email;

    if (!name || !name.trim()) {
      throw new Error('Please provide a valid name.');
    }

    if (!phoneNumber || !phoneNumber.trim()) {
      throw new Error(
        'Please provide a valid phone number.'
      );
    }

    const mailData = {
      from: process.env.EMAIL_USERNAME,
      to: sendEmailTo,
      subject: `💋 Message From pmu.nyc ${name}`,
      text: message + phoneNumber + '| Sent from: pmu.nyc',
      html: `<h3>${reason}</h3>
      <h4>${phoneNumber}</h4>
      <p>${name}</p>
      <hr />
      <div>${message}</div>
      <hr/>
      <p>${email}</p>
      <p>Sent from: pmu.nyc</p>`,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json({
      status: 'success',
      message: 'Message has been sent successfully',
    });
  } catch (error) {
    NextResponse.json({
      status: 'fail',
      message:
        'Something went wrong, please refresh the page and try again',
    });
  }
}
