const buyTicketButtons = document.querySelectorAll('.buy-ticket-btn');

buyTicketButtons.forEach(button => {
button.addEventListener('click', () => {
const ticketForm = button.nextElementSibling;
ticketForm.classList.toggle('hidden');
});
});

const ticketForms = document.querySelectorAll('.ticket-form form');

ticketForms.forEach(form => {
form.addEventListener('submit', (event) => {
event.preventDefault();
const eventName = form.parentNode.parentNode.querySelector('h3').textContent;
const eventDate = form.parentNode.parentNode.querySelector('p:last-of-type').textContent;
const name = form.elements['name'].value;
const email = form.elements['email'].value;
const quantity = form.elements['quantity'].value;

// TODO: send purchase data to server and handle response

console.log(`Name: ${name}`);
console.log(`Email: ${email}`);
console.log(`Quantity: ${quantity}`);
console.log(`Event Name: ${eventName}`);
console.log(`Event Date: ${eventDate}`);
});
});