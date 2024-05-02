
let elemen =  document.getElementById('profileForm')
  
  
elemen.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Get form values
      let fullName = document.getElementById('fullName').value;
      let LastName = document.getElementById('LastName').value;
      let email = document.getElementById('email').value;
      let number = document.getElementById('number').value;
      let state = document.getElementById('state').value;
      let country = document.getElementById('country').value;
      let Address = document.getElementById('address').value;
      let sub = document.getElementById('sub').value;
      
      // Display profile
      document.getElementById('First Name').textContent = fullName;
      document.getElementById('Last Name').textContent = LastName;
      document.getElementById('Email').textContent = email;
      document.getElementById('Number').textContent = number;
      document.getElementById('state').textContent = state;
      document.getElementById('country').textContent = country;
      document.getElementById('Address').textContent = Address;
      document.getElementById('sub').textContent = sub;

      // Show profile display container
      document.getElementById('profileDisplay').style.display = 'block';
  });