import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { revalidatePath } from 'next/cache';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const { text } = body;

    if (!text) {
      return new NextResponse('Text is required', {
        status: 400,
      });
    }

    const contacts = await prismadb.contacts.findFirst();

    const textInput = await prismadb.contacts.update({
      where: {
        id: contacts?.id,
      },
      data: {
        options: {
          create: {
            text: text,
          },
        },
      },
      include: {
        options: true,
      },
    });
    revalidatePath('/', 'layout');
    return NextResponse.json(textInput);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
