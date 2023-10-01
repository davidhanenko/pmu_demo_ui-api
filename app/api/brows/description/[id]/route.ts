import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // if (!userId) {
    //   return new NextResponse('Unauthenticated', {
    //     status: 403,
    //   });
    // }

    if (!params.id) {
      return new NextResponse('Id is required', {
        status: 400,
      });
    }

    // const storeByUserId = await prismadb.store.findFirst({
    //   where: {
    //     id: params.storeId,
    //     userId,
    //   },
    // });

    // if (!storeByUserId) {
    //   return new NextResponse('Unauthorized', {
    //     status: 405,
    //   });
    // }

    const descriptionText = await prismadb.text.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(descriptionText);
  } catch (error) {
    console.log('[DESCRIPTION_DELETE]', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}


export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {   

    const body = await req.json();
    
    const { text } = body;
    
    if (!text) {
      return new NextResponse("Text input is required", { status: 400 });
    }


    if (!params.id) {
      return new NextResponse("Id is required", { status: 400 });
    }

    const textInput = await prismadb.text.update( {
      where: {
        id: params.id,
      },
      data: {
        text: text,
      },
    })

    return NextResponse.json(textInput);
  
  } catch (error) {
    console.log('[BROWS_DESCRIPTION_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
