
const issueForm = document.getElementById("issueForm");

issueForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    const issue = {
        title: title,
        category: category,
        location: location,
        description: description
    };

    console.log(issue);

    alert("Your issue has been submitted successfully!");

    issueForm.reset();
});
