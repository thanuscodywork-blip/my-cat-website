// Javascript Interactivity
// Feature 1: Daily cat care checklist

// step 1: slect checkbox elements and progress paragrph
const checkboxes = document.querySelectorAll('#care-checklist input[type=checkbox');
const careProgress = document.getElementById('care-progress');

// step 2: create function to update the completed task count.
function updateCareProgress(){
    let completed = 0;
    // check every box, one by one
    checkboxes.forEach(function (checkbox){
        if (checkbox.checked){
            completed = completed + 1
        }
    });
    // Display the result on webpage
    careProgress.textContent = completed + 'of' + checkboxes.length + 'task completed';
}
// Step 3: Run the function whenever a checkbox changes
checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('change', updateCareProgress);
});

// Display the correct number when the page first load
updateCareProgress();



// Features 2: join community form validation
// Step 4: Select the form and ensure the feedback paragraph exists

const joinForm = document.getElementById('join-form');
let formFeedback = document.getElementById('form-feedback');

// Create the feedback element in JS since it is not in the HTML
if (!formFeedback && joinForm) {
    formFeedback = document.createElement('p');
    formFeedback.id = 'form-feedback';
    joinForm.appendChild(formFeedback);
}

// Step 5: Listen for the form submit event
joinForm.addEventListener('submit', function (event) {
    // stop browser from refreshing the page
    event.preventDefault();

    // Read the form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const breed = document.getElementById('breed').value;

    // check whether any required information is missing
    if (name === '' || email === '' || message === '') {
        formFeedback.textContent = 'Please complete your name, email and message.';
        formFeedback.className = 'error';
    } else if (!email.includes('@') || !email.includes('.')) {
        // basic classroom check, not full email validation
        formFeedback.textContent = 'Please enter a valid email address.';
        formFeedback.className = 'error';
    } else {
        // show feedback without sending information to server
        formFeedback.textContent = 'Thank You ' + name + '! You selected ' + breed + '. Your form is valid.';
        formFeedback.className = 'success';
        joinForm.reset();
    }
});
