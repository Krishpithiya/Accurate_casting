import { NextResponse } from 'next/server';
import { productsData } from '@/data/products';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: productsData,
  });
}
