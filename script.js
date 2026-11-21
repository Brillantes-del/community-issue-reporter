
const issueForm = document.getElementById("issueForm");
const reportsList = document.getElementById("reportsList");
const formMessage = document.getElementById("formMessage");

let reports = JSON.parse(localStorage.getItem("reports")) || [];

displayReports();

issueForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const issue = {
        title: document.getElementById("title").value.trim(),
        category: document.getElementById("category").value,
        location: document.getElementById("location").value.trim(),
        description: document.getElementById("description").value.trim()
    };

    if (
        issue.title.length < 3 ||
        issue.location.length < 3 ||
        issue.description.length < 10
    ) {
        formMessage.textContent = "Please provide valid issue details.";
        formMessage.className = "error-message";
        return;
    }

    reports.push(issue);

    localStorage.setItem("reports", JSON.stringify(reports));

    displayReports();

    formMessage.textContent = "Your report was submitted successfully!";
    formMessage.className = "success-message";

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
