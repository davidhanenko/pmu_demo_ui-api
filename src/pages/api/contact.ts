import type { NextApiRequest, NextApiResponse } from 'next';
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

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  const { name, phoneNumber, email, message, reason } =
    req.body as Fields;

  if (req.method !== 'POST') {
    return res
      .status(404)
      .send({ status: 'fail', error: 'Error' });
  }

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
      text:
        req.body.message +
        req.body.phoneNumber +
        '| Sent from: pmu.nyc',
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

    res.status(250).json({
      status: 'success',
      message: 'Message has been sent successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message:
        'Something went wrong, please refresh the page and try again',
    });
  }
};

export default handler;
