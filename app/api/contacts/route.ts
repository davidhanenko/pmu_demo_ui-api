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

    return NextResponse.json( contacts );
    
  } catch (error) {
    console.log('[CONTACTS_POST]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

