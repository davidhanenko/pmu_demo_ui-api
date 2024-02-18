import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { revalidatePath } from 'next/cache';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name } = body;

    if (!name) {
      return new NextResponse('Name is required', {
        status: 400,
      });
    }

    const lips = await prismadb.lips.create({
      data: {
        name: name,
      },
    });
    revalidatePath('/', 'layout');
    return NextResponse.json(lips);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const lips = await prismadb.lips.findFirst({
      include: {
        description: true,
        process: true,
        tips: true,
        kinds: true,
      },
    });
    revalidatePath('/', 'layout');
    return NextResponse.json(lips);
  } catch (error) {
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
