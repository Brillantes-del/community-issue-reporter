
const issueForm = document.getElementById("issueForm");
const reportsList = document.getElementById("reportsList");

let reports = [];

issueForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const issue = {
        title: document.getElementById("title").value.trim(),
        category: document.getElementById("category").value,
        location: document.getElementById("location").value.trim(),
        description: document.getElementById("description").value.trim()
    };

    reports.push(issue);

    displayReports();

    alert("Your issue has been submitted successfully!");

    issueForm.reset();
});

function displayReports() {
    reportsList.innerHTML = "";

    if (reports.length === 0) {
        reportsList.innerHTML =
            '<p class="empty-message">No reports submitted yet.</p>';
        return;
    }

    reports.forEach(function(issue) {
        const card = document.createElement("div");
        card.className = "report-card";

        const title = document.createElement("h3");
        title.textContent = issue.title;

        const category = document.createElement("p");
        category.textContent = "Category: " + issue.category;

        const location = document.createElement("p");
        location.textContent = "Location: " + issue.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + issue.description;

        const status = document.createElement("span");
        status.className = "report-status";
        status.textContent = "Pending";

        card.append(title, category, location, description, status);
        reportsList.appendChild(card);
    });
}
