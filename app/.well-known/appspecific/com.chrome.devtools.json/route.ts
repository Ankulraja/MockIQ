import { NextResponse } from "next/server";

// This route handler suppresses the Chrome DevTools 404 warning
// Chrome DevTools automatically requests this file to check for app-specific configurations
export async function GET() {
  // Return 204 No Content - file doesn't exist, which is fine
  return new NextResponse(null, { status: 204 });
}

