// script.js

// 1. Button click
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button was clicked!');
  });
  
  // 2. Hover effect
  document.getElementById('hoverBtn').addEventListener('mouseover', () => {
    document.getElementById('hoverBtn').style.backgroundColor = 'lightblue';
  });
  document.getElementById('hoverBtn').addEventListener('mouseout', () => {
    document.getElementById('hoverBtn').style.backgroundColor = '';
  });
  
  // 3. Keypress detection
  document.getElementById('keypressInput').addEventListener('keypress', (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  // Bonus: Double click
  document.getElementById('clickBtn').addEventListener('dblclick', () => {
    alert('You double-clicked me!');
  });
  
// 4. Form submission
    // Change text or color
const changeBtn = document.getElementById('changeBtn');
changeBtn.addEventListener('click', () => {
  changeBtn.textContent = 'You Changed Me!';
  changeBtn.style.backgroundColor = '#ffcc00';
});

// Tabs
const tabs = document.querySelectorAll('.tab');
const tabContent = document.getElementById('tabContent');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabNum = tab.getAttribute('data-tab');
    tabContent.textContent = `You opened Tab ${tabNum}`;
  });
});

// Image gallery function
function changeImage(src) {
  document.getElementById('mainImage').src = src;
}
const form = document.getElementById('myForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop page from refreshing

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!name || !email || !password) {
    feedback.textContent = 'All fields are required.';
    feedback.style.color = 'red';
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    feedback.textContent = 'Please enter a valid email.';
    feedback.style.color = 'red';
    return;
  }

  if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = 'Form submitted successfully!';
  feedback.style.color = 'green';
});

// Bonus: Real-time feedback
document.getElementById('password').addEventListener('input', (e) => {
  const pass = e.target.value;
  if (pass.length < 8) {
    feedback.textContent = 'Password too short!';
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = '';
  }
});
