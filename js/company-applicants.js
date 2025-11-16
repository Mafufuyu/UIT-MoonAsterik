// Company Applicants Main Module
// Entry point that loads dependent modules and initializes the page

// Initialize page on DOM ready
document.addEventListener('DOMContentLoaded', function () {
	// Load user info for dropdown
	loadUserInfo();
	initUserDropdown();

	// Mobile menu toggle
	const mobileToggle = document.getElementById('mobileToggle');
	const navbarMenu = document.getElementById('navbarMenu');

	if (mobileToggle && navbarMenu) {
		mobileToggle.addEventListener('click', function () {
			this.classList.toggle('active');
			navbarMenu.classList.toggle('active');
		});
	}

	// Load applicants from applicants-list module
	loadApplicants();
});

// Logout function
function logout() {
	if (confirm('Are you sure you want to logout?')) {
		localStorage.removeItem('currentUser');
		localStorage.removeItem('isLoggedIn');
		alert('Logged out successfully!');
		window.location.href = '../../index.html';
	}
}

// Load user info for dropdown
function loadUserInfo() {
	const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

	if (currentUser.username) {
		const userNameEl = document.getElementById('userName');
		const dropdownUserNameEl = document.getElementById('dropdownUserName');
		const dropdownUserEmailEl = document.getElementById('dropdownUserEmail');

		if (userNameEl) {
			userNameEl.textContent = currentUser.fullname || currentUser.username;
		}
		if (dropdownUserNameEl) {
			dropdownUserNameEl.textContent =
				currentUser.fullname || currentUser.username;
		}
		if (dropdownUserEmailEl) {
			dropdownUserEmailEl.textContent = currentUser.email || '';
		}
	}
}

// Initialize user dropdown
function initUserDropdown() {
	const dropdownToggle = document.getElementById('userDropdownToggle');
	const dropdownMenu = document.getElementById('userDropdownMenu');

	if (dropdownToggle && dropdownMenu) {
		dropdownToggle.addEventListener('click', function (e) {
			e.stopPropagation();
			dropdownMenu.classList.toggle('show');
		});

		// Close dropdown when clicking outside
		document.addEventListener('click', function (e) {
			if (
				!dropdownToggle.contains(e.target) &&
				!dropdownMenu.contains(e.target)
			) {
				dropdownMenu.classList.remove('show');
			}
		});
	}
}
