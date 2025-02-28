document.getElementById('emailForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const emailInput = this.querySelector('input[type="email"]');
    const feedbackMessage = this.querySelector('.feedback-message');
    const email = emailInput.value.trim();
    
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    
    if (emailRegex.test(email)) {
        try {
            const response = await fetch('YOUR_API_GATEWAY_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                feedbackMessage.textContent = 'We will be in touch shortly.';
                feedbackMessage.className = 'feedback-message success';
                emailInput.value = ''; // Clear the input
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
            feedbackMessage.textContent = 'There was an error. Please try again later.';
            feedbackMessage.className = 'feedback-message error';
        }
    } else {
        feedbackMessage.textContent = 'Please input a valid email.';
        feedbackMessage.className = 'feedback-message error';
    }
}); 