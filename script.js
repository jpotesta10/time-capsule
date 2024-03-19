function createTimeCapsule() {
    const message = document.getElementById('message').value.trim();
    const openDate = document.getElementById('open-date').value;
    if (message && openDate) {
        // In a full app, here you would save the time capsule data to a database
        alert(`Your time capsule has been sealed! It will open on ${openDate}.`);
        // Reset the form
        document.getElementById('time-capsule-form').reset();
    } else {
        alert('Please fill out both the message and the open date.');
    }
}
