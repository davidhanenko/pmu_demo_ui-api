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

    const about = await prismadb.about.create({
      data: {
        name: name,
      },
    });

    return NextResponse.json(about);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
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
        heroName: text,
      },
    });

    return NextResponse.json(textInput);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const about = await prismadb.about.findFirst({
      include: {
        description: true,
        welcome: true,
        machine: true,
      },
    });

    return NextResponse.json(about);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
