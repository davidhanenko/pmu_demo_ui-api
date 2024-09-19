import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { revalidatePath } from 'next/cache';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email } = body;

    if (!name) {
      return new NextResponse('Name is required', {
        status: 400,
      });
    }

    const contacts = await prismadb.contacts.create({
      data: {
        name: name,
        email: email,
      },
    });
    revalidatePath('/', 'layout');
    return NextResponse.json(contacts);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const {
      phone,
      email,
      instagram,
      address1,
      address2,
      location,
    } = body;

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
        location,
      },
    });
    revalidatePath('/', 'layout');
    return NextResponse.json(contacts);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const contacts = await prismadb.contacts.findFirst({
      include: {
        options: true,
      },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
