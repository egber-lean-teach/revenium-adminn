import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import TextService from "@/app/api/services/texts.service";
import UtilApplication from "../utils/util.application";

export async function GET(): Promise<NextResponse> {
  try {
    const textService = container.resolve(TextService);
    const texts = await textService.getAll();
    return NextResponse.json(
      {
        message: "Get all texts success",
        statusCode: 200,
        data: texts,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { category, subcategory, name, description } = await req.json();
  const verifyParams = UtilApplication.verifyAllParams(
    category,
    subcategory,
    name,
    description
  );
  if (!verifyParams) {
    return NextResponse.json(
      {
        message: "Error. Is required all params",
        statusCode: 400,
        data: [],
      },
      { status: 400 }
    );
  }
  try {
    const textService = container.resolve(TextService);
    const textCreate = await textService.postText({
      category,
      description,
      name,
      subcategory,
      id: "",
    });

    if (!textCreate) {
      return NextResponse.json(
        {
          message: "Is not support special symbols",
          statusCode: 400,
          data: [],
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: textCreate,
        statusCode: 201,
        data: [],
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: error,
        statusCode: 500,
        data: [],
      },
      { status: 500 }
    );
  }
}
