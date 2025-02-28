const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' }); // or your preferred region

exports.handler = async (event) => {
    try {
        // Parse the incoming request body
        const body = JSON.parse(event.body);
        const customerEmail = body.email;
        
        // Email parameters
        const params = {
            Source: 'satvik@shipodyssey.com', // Using verified email as sender
            Destination: {
                ToAddresses: ['satvik@shipodyssey.com']
            },
            Message: {
                Subject: {
                    Data: 'Interested party from Odyssey landing page'
                },
                Body: {
                    Text: {
                        Data: `Interested party: ${customerEmail}\n\nThis email was submitted through the Odyssey landing page.`
                    }
                }
            }
        };
        
        // Send email
        await ses.sendEmail(params).promise();
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Configure this appropriately for production
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*', // Configure this appropriately for production
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            body: JSON.stringify({ message: 'Error sending email' })
        };
    }
}; 