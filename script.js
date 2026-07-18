document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', function() {
    // 1. Remove 'active' class from all links
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    // 2. Add 'active' class to clicked link
    this.classList.add('active');

    // 3. Update content (Example logic)
    const target = this.getAttribute('data-target');
    const contentArea = document.getElementById('content-area');
    
    if (target === 'home') {
      contentArea.innerHTML = '<h1>Partha Pratim Ghosh</h1><p>Welcome to my homepage!</p>';
    } else if (target === 'research') {
      contentArea.innerHTML = '<h1>Research</h1><p>Details about research...</p>';
    }
  });
});
