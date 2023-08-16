// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submitButton = document.getElementById('submit-button');

function change(){
    let contactpage = document.getElementById('contact-page');
    contactpage.style.fontSize ='24px';
    contactpage.textContent ='Thank you for your message';
}
submitButton.addEventListener('click',change)
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

