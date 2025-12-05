import { handlers } from "@/auth";
import { NextRequest, NextResponse } from 'next/server';

// App Router үшін NextAuth endpoint
export const GET = handlers.GET;
export const POST = handlers.POST;
