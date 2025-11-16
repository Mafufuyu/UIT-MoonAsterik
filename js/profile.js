// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navbarMenu = document.getElementById('navbarMenu');

if (mobileToggle && navbarMenu) {
	mobileToggle.addEventListener('click', function () {
		this.classList.toggle('active');
		navbarMenu.classList.toggle('active');
	});
}

// Logout function
function logout() {
	if (confirm('Are you sure you want to logout?')) {
		localStorage.removeItem('currentUser');
		localStorage.removeItem('isLoggedIn');
		alert('Logged out successfully!');
		window.location.href = '../../index.html';
	}
}

window.logout = logout;

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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
	console.log('Profile page loaded - DOMContentLoaded fired');

	// Load user info for dropdown
	loadUserInfo();
	initUserDropdown();

	// Check if user is logged in
	const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
	const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

	if (!isLoggedIn || !currentUser.userid) {
		console.warn('User not logged in, redirecting to login page');
		alert('Please login first to access your profile');
		window.location.href = '../../index.html';
		return;
	}

	console.log('Current logged in user:', currentUser);
	console.log('User ID:', currentUser.userid);

	// Small delay to ensure DOM is fully ready
	setTimeout(() => {
		const profileKey = `userProfile_${currentUser.userid}`;
		const savedProfile = localStorage.getItem(profileKey);
		console.log('Profile key:', profileKey);
		console.log('Saved profile data exists:', !!savedProfile);

		if (savedProfile) {
			const profile = JSON.parse(savedProfile);
			console.log('Parsed profile:', profile);
			console.log('Skills count:', profile.skills?.length || 0);
			console.log('Education count:', profile.education?.length || 0);
			console.log('Experience count:', profile.experience?.length || 0);
			console.log('Links count:', profile.links?.length || 0);
		}

		loadProfile();
		console.log('loadProfile() completed');
	}, 100);
});
