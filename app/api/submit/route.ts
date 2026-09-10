import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  const formId = process.env.FORM_ID;
  const token = process.env.FORM_TOKEN;
  const apiBaseUrl = process.env.API_BASE_URL;

  const response = await fetch(`${apiBaseUrl}/api/public/forms/${formId}/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
      data,
      email: data.email, // Extract email for contact creation
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return NextResponse.json({ error: errorData.message || 'Upstream submission failed' }, { status: response.status });
  }

  return NextResponse.json({ success: true });
}
