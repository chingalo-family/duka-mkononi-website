// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });
});

// Toast notification function
function showToast(message, type = 'success') {
    // Create toast container if it doesn't exist
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'fixed top-4 right-4 z-[9999] flex flex-col gap-3';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-primary' : 'bg-red-600';
    const icon = type === 'success' ? 'check_circle' : 'error';
    
    toast.className = `${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[300px] max-w-md transform transition-all duration-300 translate-x-[400px] opacity-0`;
    toast.innerHTML = `
        <span class="material-symbols-outlined text-2xl">${icon}</span>
        <p class="flex-1 font-medium">${message}</p>
        <button onclick="this.parentElement.remove()" class="material-symbols-outlined text-xl hover:bg-white/20 rounded-lg p-1 transition-colors">close</button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.remove('translate-x-[400px]', 'opacity-0');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.classList.add('translate-x-[400px]', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// Handle contact form submission using FormSubmit.co
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const isSwahili = document.documentElement.lang === 'sw' || !window.location.href.includes('-en.html');
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = isSwahili ? 'Inatuma...' : 'Sending...';
        
        try {
            const response = await fetch('https://formsubmit.co/chingalo.family@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success toast
                showToast(
                    isSwahili ? 
                    'Asante kwa ujumbe wako! Tutawasiliana nawe ndani ya saa 24.' : 
                    'Thank you for your message! We will contact you within 24 hours.',
                    'success'
                );
                
                // Reset form
                this.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Show error toast
            showToast(
                isSwahili ? 
                'Samahani, kuna tatizo la kimtandao. Tafadhali jaribu tena baadaye.' : 
                'Sorry, there was a network error. Please try again later.',
                'error'
            );
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}
