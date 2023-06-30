import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type Fields = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
  reason: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  // secure: true,
});

export async function POST(req: Request, res: Response) {
  const { name, phoneNumber, email, message, reason } =
    req.body as unknown as Fields;

  console.log(name);

  // if (req.method !== 'POST') {
  //   return res
  //     .status(404)
  //     .send({ status: 'fail', error: 'Error' });
  // }

  try {
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
      to: process.env.EMAIL_TO,
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

    NextResponse.json({
      status: 'success',
      message: 'Message has been sent successfully',
    });
  } catch (error) {
    console.log(error);
    NextResponse.json({
      status: 'fail',
      message: `${error}`,
    });
  }
}
