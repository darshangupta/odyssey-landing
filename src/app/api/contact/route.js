import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email } = await request.json()

    // Call AWS API Gateway endpoint
    const response = await fetch('https://your-api-gateway-id.execute-api.region.amazonaws.com/stage/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any API key if required
        // 'x-api-key': process.env.AWS_API_KEY
      },
      body: JSON.stringify({
        email,
        source: 'odyssey-landing',
        timestamp: new Date().toISOString()
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email')
    }

    return NextResponse.json({ success: true, message: 'Email received' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to process email request' },
      { status: 500 }
    )
  }
}