// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });
});

// Handle contact form submission using FormSubmit.co
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const isSwahili = document.documentElement.lang === 'sw' || window.location.href.includes('-sw.html');
        
        try {
            const response = await fetch('https://formsubmit.co/chingalo.family@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                alert(isSwahili ? 
                    'Asante kwa ujumbe wako! Tutawasiliana nawe ndani ya saa 24.' : 
                    'Thank you for your message! We will contact you within 24 hours.'
                );
                
                // Reset form
                this.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(isSwahili ? 
                'Samahani, kuna tatizo la kimtandao. Tafadhali jaribu tena baadaye.' : 
                'Sorry, there was a network error. Please try again later.'
            );
        }
    });
}
