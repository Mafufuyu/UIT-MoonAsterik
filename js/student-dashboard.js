// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navbarMenu = document.getElementById('navbarMenu');

if (mobileToggle && navbarMenu) {
	mobileToggle.addEventListener('click', function () {
		this.classList.toggle('active');
		navbarMenu.classList.toggle('active');
	});
}

// Initialize user dropdown
document.addEventListener('DOMContentLoaded', function () {
	loadUserInfo();
	initUserDropdown();
	loadProfileCompletion();
	loadDashboardStats();
});

// Calculate and display profile completion
function loadProfileCompletion() {
	const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
	const userId = currentUser.userid || currentUser.userId || currentUser.id;

	if (!userId) return;

	// Get profile data
	const profileKey = `userProfile_${userId}`;
	const profile = JSON.parse(localStorage.getItem(profileKey) || '{}');

	// Calculate completion
	const checks = {
		basicInfo: false,
		skills: false,
		education: false,
		resume: false,
		portfolio: false,
	};

	// Check basic information (name, email, phone, location, bio)
	if (
		profile.fullName &&
		profile.email &&
		profile.phone &&
		profile.location &&
		profile.bio
	) {
		checks.basicInfo = true;
	}

	// Check skills
	if (profile.skills && profile.skills.length > 0) {
		checks.skills = true;
	}

	// Check education
	if (profile.education && profile.education.length > 0) {
		checks.education = true;
	}

	// Check resume
	if (profile.resume) {
		checks.resume = true;
	}

	// Check portfolio links
	if (profile.links && profile.links.length > 0) {
		checks.portfolio = true;
	}

	// Calculate percentage
	const completedCount = Object.values(checks).filter((v) => v).length;
	const totalCount = Object.keys(checks).length;
	const percentage = Math.round((completedCount / totalCount) * 100);

	// Update UI
	updateProgressUI(percentage, checks);
}

function updateProgressUI(percentage, checks) {
	// Update circular progress
	const progressValue = document.querySelector('.progress-value');
	const progressRing = document.querySelector('.progress-ring-fill');

	if (progressValue) {
		progressValue.textContent = percentage + '%';
	}

	if (progressRing) {
		const circumference = 2 * Math.PI * 60; // radius = 60
		const offset = circumference - (percentage / 100) * circumference;
		progressRing.style.strokeDashoffset = offset;
	}

	// Update checklist items
	const checklistItems = document.querySelectorAll('.checklist-item');
	const checkOrder = [
		'basicInfo',
		'skills',
		'education',
		'resume',
		'portfolio',
	];

	checklistItems.forEach((item, index) => {
		const checkKey = checkOrder[index];
		if (checks[checkKey]) {
			item.classList.add('completed');
		} else {
			item.classList.remove('completed');
		}
	});
}

// Load dashboard statistics
function loadDashboardStats() {
	const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
	const userId = currentUser.userid || currentUser.userId || currentUser.id;

	if (!userId) return;

	// Get student applications
	const studentApplicationsKey = `studentApplications_${userId}`;
	const applications = JSON.parse(
		localStorage.getItem(studentApplicationsKey) || '[]'
	);

	// Count interviews (applications with status 'Interview')
	const interviewCount = applications.filter(
		(app) => app.status === 'Interview'
	).length;

	// Count total applications
	const applicationCount = applications.length;

	// Profile views - would need tracking system, using mock for now
	const profileViews = localStorage.getItem(`profileViews_${userId}`) || 127;

	// Saved jobs
	const savedJobsKey = `savedJobs_${userId}`;
	const savedJobs = JSON.parse(localStorage.getItem(savedJobsKey) || '[]');
	const savedJobsCount = savedJobs.length;

	// Update UI
	const statCards = document.querySelectorAll('.stat-card');
	if (statCards.length >= 4) {
		// Profile Views
		statCards[0].querySelector('.stat-value').textContent = profileViews;

		// Applications
		statCards[1].querySelector('.stat-value').textContent = applicationCount;

		// Saved Jobs
		statCards[2].querySelector('.stat-value').textContent = savedJobsCount;

		// Interviews
		statCards[3].querySelector('.stat-value').textContent = interviewCount;
	}
}

// Load user info into navbar
function loadUserInfo() {
	const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

	if (currentUser.username) {
		// Update user name in navbar
		const userNameElement = document.getElementById('userName');
		const dropdownUserName = document.getElementById('dropdownUserName');
		const dropdownUserEmail = document.getElementById('dropdownUserEmail');
		const bannerUserName = document.getElementById('bannerUserName');

		const displayName = currentUser.fullname || currentUser.username;

		if (userNameElement) {
			userNameElement.textContent = displayName;
		}
		if (dropdownUserName) {
			dropdownUserName.textContent = displayName;
		}
		if (dropdownUserEmail) {
			dropdownUserEmail.textContent = currentUser.email || '';
		}
		if (bannerUserName) {
			bannerUserName.textContent = displayName;
		}
	}
}

// Initialize user dropdown toggle
function initUserDropdown() {
	const dropdownToggle = document.getElementById('userDropdownToggle');
	const dropdown = dropdownToggle?.closest('.user-dropdown');

	if (!dropdownToggle || !dropdown) return;

	dropdownToggle.addEventListener('click', function (e) {
		e.stopPropagation();
		dropdown.classList.toggle('active');
	});

	// Close dropdown when clicking outside
	document.addEventListener('click', function (e) {
		if (!dropdown.contains(e.target)) {
			dropdown.classList.remove('active');
		}
	});

	// Close dropdown when clicking menu items
	const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
	dropdownItems.forEach((item) => {
		item.addEventListener('click', function () {
			if (!this.onclick || this.onclick.toString().indexOf('logout') === -1) {
				dropdown.classList.remove('active');
			}
		});
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

// Load dashboard data
function loadDashboard() {
	try {
		// Check login status
		const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
		const studentId =
			currentUser.userid || currentUser.userId || currentUser.id;

		if (!studentId) {
			alert('Please login first!');
			window.location.href = '../../index.html';
			return;
		}

		// Get all jobs from localStorage
		let allJobs = [];
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key.startsWith('companyJobs_')) {
				const jobs = JSON.parse(localStorage.getItem(key) || '[]');
				allJobs = [...allJobs, ...jobs];
			}
		}

		// Get student applications
		const studentApplicationsKey = `studentApplications_${studentId}`;
		const studentApplications = JSON.parse(
			localStorage.getItem(studentApplicationsKey) || '[]'
		);

		// Load recommended jobs (module function)
		loadRecommendedJobs(allJobs);

		// Load recent applications (module function)
		loadRecentApplications(studentApplications, allJobs);
	} catch (error) {
		console.error('Error loading dashboard:', error);
	}
}

// Load dashboard when page loads
document.addEventListener('DOMContentLoaded', loadDashboard);
