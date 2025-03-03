// import { container } from "tsyringe";
import "../index";
import s3Data from "../config/s3";
import { OrganizationService } from "../services/organization.service";
import { NextResponse } from "next/server";
console.log("trying");

export async function GET(): Promise<NextResponse> {
  // try {
  //   console.log("ok");
  //   const organizationService = container.resolve(OrganizationService);
  //   const organizations = await organizationService.getAll(s3Data);
  //   return NextResponse.json({
  //     message: "Success to get all organizations",
  //     statusCode: 200,
  //     data: organizations,
  //   });
  // } catch (error: unknown) {
  //   return NextResponse.json({
  //     message: error,
  //     statusCode: 500,
  //     data: [],
  //   });
  // }
  return NextResponse.json({
    message: "Hello",
  });
}
