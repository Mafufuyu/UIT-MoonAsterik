// Dashboard Applications Module - Manages recent applications display

// Load recent applications (most recent 3)
function loadRecentApplications(applications, jobs) {
  if (applications.length === 0) {
    document.getElementById('recent-applications').innerHTML = `
      <p style="text-align: center; color: #999; padding: 2rem;">No applications yet</p>
    `;
    return;
  }

  // Sort by appliedAt (most recent first) and get first 3
  const recentApps = applications
    .sort((a, b) => new Date(b.appliedAt) - new Date(a.appliedAt))
    .slice(0, 3);

  document.getElementById('recent-applications').innerHTML = recentApps.map(app => {
    const job = jobs.find(j => j.id == app.jobId);
    if (!job) return '';

    const statusClass = `status-${(app.status || 'Pending').toLowerCase()}`;
    const statusText = {
      'Pending': 'Under Review',
      'Reviewing': 'Reviewing',
      'Interview': 'Interview',
      'Rejected': 'Rejected',
      'Accepted': 'Accepted'
    }[app.status] || 'Under Review';

    const date = new Date(app.appliedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return `
      <article class="application-card ${app.status === 'Rejected' ? 'application-rejected' : ''}">
        <div class="application-header">
          <div>
            <h4 class="application-title">${job.title}</h4>
            <p class="application-company">${job.companyName}</p>
          </div>
          <span class="application-status-badge ${statusClass}">${statusText}</span>
        </div>
        <p class="application-date">Applied on ${date}</p>
      </article>
    `;
  }).join('');
}

// Export functions to window object
window.loadRecentApplications = loadRecentApplications;
