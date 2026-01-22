// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });
});

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name') ? document.getElementById('name').value : document.getElementById('jina').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone') ? document.getElementById('phone').value : document.getElementById('simu').value,
            message: document.getElementById('message') ? document.getElementById('message').value : document.getElementById('ujumbe').value
        };
        
        // Create HTML email content
        const emailContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #065808; color: white; padding: 20px; text-align: center; }
                    .content { background-color: #f8faf8; padding: 20px; margin-top: 20px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #065808; }
                    .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #ffc107; }
                    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Contact Form Submission</h1>
                        <p>Duka Mkononi Website</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Full Name:</div>
                            <div class="value">${formData.name}</div>
                        </div>
                        <div class="field">
                            <div class="label">Email Address:</div>
                            <div class="value">${formData.email}</div>
                        </div>
                        <div class="field">
                            <div class="label">Phone Number:</div>
                            <div class="value">${formData.phone}</div>
                        </div>
                        <div class="field">
                            <div class="label">Message:</div>
                            <div class="value">${formData.message}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Submitted on: ${new Date().toLocaleString()}</p>
                        <p>© ${new Date().getFullYear()} Duka Mkononi. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `;
        
        // Create mailto link with HTML content
        const subject = encodeURIComponent('New Contact Form Submission - Duka Mkononi');
        const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Submitted on: ${new Date().toLocaleString()}
        `);
        
        // Log the form data to console
        console.log('Form submitted:', formData);
        console.log('HTML Email Content:', emailContent);
        
        // Open mailto link (this will open the user's email client)
        window.location.href = `mailto:chingalo.family@gmail.com?subject=${subject}&body=${body}`;
        
        // Show success message
        const isSwahili = document.documentElement.lang === 'sw' || window.location.href.includes('-sw.html');
        alert(isSwahili ? 
            'Asante kwa ujumbe wako! Tutawasiliana nawe ndani ya saa 24.' : 
            'Thank you for your message! We will contact you within 24 hours.'
        );
        
        // Reset form
        this.reset();
    });
}
