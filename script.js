function registerCourses() {
    const form = document.getElementById('registrationForm');
    const selectedCourses = Array.from(form.elements['course'])
                                .filter(course => course.checked)
                                .map(course => course.value);
    localStorage.setItem('registeredCourses', JSON.stringify(selectedCourses));
    window.location.href = 'summary.html';
}

window.onload = function() {
    if (window.location.pathname.includes('summary.html')) {
        const courseListDiv = document.getElementById('courseList');
        const registeredCourses = JSON.parse(localStorage.getItem('registeredCourses') || '[]');
        const courseList = document.createElement('ul');
        registeredCourses.forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = course;
            courseList.appendChild(listItem);
        });
        courseListDiv.appendChild(courseList);
    }
};
