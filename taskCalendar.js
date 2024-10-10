// taskCalendar.js

// Prompt the user to enter a day of the week
let dayOfWeek = prompt("Enter a day of the week:").toLowerCase();

// Initialize a variable to store the task for the day
let task;

// Use a switch statement to map each day to a specific task
switch (dayOfWeek) {
    case 'monday':
        task = "Finish your assignments.";
        break;
    case 'tuesday':
        task = "Attend team meeting.";
        break;
    case 'wednesday':
        task = "Work on project updates.";
        break;
    case 'thursday':
        task = "Prepare for presentation.";
        break;
    case 'friday':
        task = "Submit weekly report.";
        break;
    case 'saturday':
        task = "Review your learning materials.";
        break;
    case 'sunday':
        task = "Plan for the upcoming week.";
        break;
    default:
        task = "Invalid day entered. Please enter a valid day of the week.";
        break;
}

// Log the task to the console
console.log(`Your task for ${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)} is: ${task}`);
