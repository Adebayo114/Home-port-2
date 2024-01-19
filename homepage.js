document.addEventListener('DOMContentLoaded', function () {
    // Initial counts
    let deliveredCount = 85;
    let ongoingCount = 15;
    let happyCustomerCount = 205;

    function updateCounts() {
        // Update counts
        deliveredCount++;
        ongoingCount++;
        happyCustomerCount++;

        // Update HTML
        document.getElementById('deliveredCount').innerText = deliveredCount;
        document.getElementById('ongoingCount').innerText = ongoingCount;
        document.getElementById('happyCustomerCount').innerText = happyCustomerCount;
    }

    // Update counts every 2 minutes (120,000 milliseconds)
    setInterval(updateCounts, 60000);
});
