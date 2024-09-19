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

    const about = await prismadb.about.findFirst();

    const textInput = await prismadb.about.update({
      where: {
        id: about?.id,
      },
      data: {
        machine: {
          create: {
            text: text,
          },
        },
      },
      include: {
        machine: true,
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
