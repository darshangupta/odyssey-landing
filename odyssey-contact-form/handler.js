const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });

module.exports.sendEmail = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const customerEmail = body.email;
    
    const params = {
      Source: 'satvik@shipodyssey.com',
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
    
    await ses.sendEmail(params).promise();
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        message: 'Email sent successfully'
      }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        message: 'Error sending email'
      }),
    };
  }
}; 