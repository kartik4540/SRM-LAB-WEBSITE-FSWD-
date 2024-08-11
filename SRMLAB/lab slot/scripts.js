function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('hidden');
    }
}
document.getElementById('labBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const date = document.getElementById('date').value;
    const timeSlot = document.getElementById('timeSlot').value;

    // Display the booked slot details or save them to the server
    alert(`Slot booked successfully!\n\nName: ${name}\nEmail: ${email}\nDepartment: ${department}\nDate: ${date}\nTime Slot: ${timeSlot}`);
});

