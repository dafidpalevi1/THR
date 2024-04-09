function showPaymentMethod(selectedRecipient) {
  const paymentButtons = document.getElementById('paymentButtons');
  paymentButtons.innerHTML = '';

  switch (selectedRecipient) {
    case 'dafidPalevi':
      createPaymentButton('Dana', '0895638066066', 'dana', '0895638066066', 'MUHAMMAD KHADAFI');
      createPaymentButton('MANDIRI', '1070016980189', 'mandiri', '1070016980189', 'MUHAMMAD KHADAFI');
      break;
    case 'rezhaPohan':
      createPaymentButton('BRI', '537201026360539', 'bri', '537201026360539', 'Rezha Pohan');
      break;
    case 'masAri':
      createPaymentButton('OVO', '-', 'ovo', '-', 'Mas Ari');
      createPaymentButton('BNI', '-', 'bni', '-', 'Mas Ari');
      break;  
    case 'jonBusri':
      createPaymentButton('BNI', '-', 'bni', '-', 'Jon Busri');
      createPaymentButton('OVO', '-', 'ovo', '-', 'Jon Busri');
      break;  
    case 'pandy':
      createPaymentButton('BCA', '-', 'bca', '-', 'Pandy');
      createPaymentButton('BNI', '-', 'bni', '-', 'Pandy');
      break;
    case 'fadlan':
      createPaymentButton('BRI', '008501035674507 ', 'bri', '-', 'Fadlan');
      break;
    // Add cases for other recipients as needed
    default:
      break;
  }

  // Display the payment method section
  document.getElementById('paymentMethodSection').style.display = 'block';
  // Hide the back button and send THR button initially
  document.getElementById('backButton').style.display = 'none';
  document.getElementById('sendTHRButton').style.display = 'none';
}

function createPaymentButton(method, number, accountName, id, nama) {
    const paymentButtons = document.getElementById('paymentButtons');
    const button = document.createElement('button');
    button.textContent = 'Kirim THR ' + method; // Menambahkan 'Kirim THR' di depan nama metode pembayaran
    button.id = id + 'Payment'; // Set unique id for the button
    button.addEventListener('click', () => {
      if (method.toLowerCase() === 'dana' || method.toLowerCase() === 'ovo' || method.toLowerCase() === 'bni' || method.toLowerCase() === 'bri' || method.toLowerCase() === 'bca') {
        // Show payment details
        showPaymentDetails(method, number, nama);
        // Hide other payment buttons and show Dana menu button
        document.querySelectorAll('.buttons.payment-buttons button').forEach(btn => {
          btn.style.display = 'none';
        });
        document.getElementById('backButton').style.display = 'inline-block';
        document.getElementById('sendTHRButton').style.display = 'inline-block';
        // Redirect to Dana app using URI scheme
        if(method.toLowerCase() === 'dana') {
          window.location.href = 'dana://open';
        }
      } else {
        // If it's not one of the payment methods, it's Mandiri, so display its details
        showPaymentDetails(method, number, nama);
        // Show the back button and hide the send THR button
        document.getElementById('backButton').style.display = 'inline-block';
        document.getElementById('sendTHRButton').style.display = 'inline-block';
        // Hide other payment buttons
        document.querySelectorAll('.buttons.payment-buttons button').forEach(btn => {
          btn.style.display = 'none';
        });
      }
    });
    paymentButtons.appendChild(button);
  }
  

function showPaymentDetails(method, number, nama) {
  const paymentDetailsContainer = document.getElementById('paymentDetailsContainer');
  paymentDetailsContainer.innerHTML = `<p>Nomor ${method}: ${number}</p><p>Atas Nama: ${nama}</p>`;
}

// Get the dropdown for THR recipients
const recipientDropdown = document.getElementById('recipientList');

// Add event listener when the selection in the dropdown changes
recipientDropdown.addEventListener('change', () => {
  const selectedRecipient = recipientDropdown.value;
  showPaymentMethod(selectedRecipient);
});

// Add event listener for the back button
document.getElementById('backButton').addEventListener('click', () => {
  // Clear payment details
  document.getElementById('paymentDetailsContainer').innerHTML = '';
  // Hide the back button and send THR button
  document.getElementById('backButton').style.display = 'none';
  document.getElementById('sendTHRButton').style.display = 'none';
  // Show payment buttons again
  document.querySelectorAll('.buttons.payment-buttons button').forEach(btn => {
    btn.style.display = 'inline-block';
  });
});

// Add event listener for the send THR button
document.getElementById('sendTHRButton').addEventListener('click', () => {
  alert('THR telah berhasil dikirim!');
});
