import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name } = body;

    if (!name) {
      return new NextResponse('Name is required', {
        status: 400,
      });
    }

    const contacts = await prismadb.contacts.create({
      data: {
        name: name,
      },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.log('[CONTACTS_POST]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { phone, email, instagram, address1, address2 } =
      body;

    if (!email) {
      return new NextResponse('Email is required', {
        status: 400,
      });
    }

    const contacts = await prismadb.contacts.update({
      where: {
        name: 'contacts',
      },
      data: {
        phone,
        email,
        instagram,
        address1,
        address2,
      },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.log('CONTACTS_PATCH', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const contacts = await prismadb.contacts.findFirst();

    return NextResponse.json(contacts);
  } catch (error) {
    console.log('CONTACTS_GET]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
