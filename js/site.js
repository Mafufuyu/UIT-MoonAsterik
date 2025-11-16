// Modal Management
document.addEventListener('DOMContentLoaded', function() {
  // Get all modal triggers
  const modalTriggers = document.querySelectorAll('[data-modal-open]');
  const modalClosers = document.querySelectorAll('[data-modal-close]');
  
  // Open modal
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId + '-modal');
      
      if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent body scroll
      }
    });
  });
  
  // Close modal
  modalClosers.forEach(closer => {
    closer.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = this.closest('.modal');
      
      if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore body scroll
      }
    });
  });
  
  // Close modal when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this || e.target.classList.contains('modal-overlay')) {
        this.classList.remove('active');
        this.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Close modal with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
        activeModal.classList.remove('active');
        activeModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
  });
  
  // Form submission handlers (prevent default for now)
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Signup form submitted');
      // Add your signup logic here
    });
  }
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Login form submitted');
      // Add your login logic here
    });
  }
});

// Export for module usage
export {};
