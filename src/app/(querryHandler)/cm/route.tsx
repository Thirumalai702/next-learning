import { comments } from "@/app/(routeHandlers)/comments/data";
import { type NextRequest } from "next/server";
export async function GET(
    request: NextRequest, ) {
    const searchParams=request.nextUrl.searchParams;
    const query =searchParams.get("query");
    const filterc=query 
    ?comments.filter((comments)=>comments.text.includes(query))
    :comments;
    return Response.json(filterc)
  }