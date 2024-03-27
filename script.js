// script.js

// Function to display payment methods based on selected recipient
function showPaymentMethod(selectedRecipient) {
    const paymentButtons = document.getElementById('paymentButtons');
    paymentButtons.innerHTML = ''; // Clear previous payment buttons
  
    // Switch case to determine payment methods based on recipient
    switch (selectedRecipient) {
      case 'dafidPalevi':
        createPaymentButton('Dana', '0895638066066');
        createPaymentButton('OVO', '0895638066066');
        createPaymentButton('BNI', 'Nomor BNI');
        createPaymentButton('BRI', 'Nomor BRI');
        createPaymentButton('BCA', 'Nomor BCA');
        createPaymentButton('MANDIRI', '1070016980189');
        break;
      case 'rezhaPohan':
        createPaymentButton('Dana', '0895638066066');
        createPaymentButton('OVO', 'Nomor OVO');
        createPaymentButton('BNI', 'Nomor BNI');
        createPaymentButton('BRI', 'Nomor BRI');
        createPaymentButton('BCA', 'Nomor BCA');
        createPaymentButton('MANDIRI', 'Nomor Mandiri');
        break;
      // Add cases for other recipients as needed
      default:
        break;
    }
  
    // Display the payment method section
    const paymentMethodSection = document.getElementById('paymentMethodSection');
    paymentMethodSection.style.display = 'block';
  }
  
  // Function to create payment buttons dynamically
  function createPaymentButton(method, number) {
    const paymentButtons = document.getElementById('paymentButtons');
  
    // Create button element
    const button = document.createElement('button');
    button.textContent = method; // Set button text
    button.addEventListener('click', () => {
      // Handle button click event
      handlePayment(method, number);
    });
  
    // Append button to payment buttons container
    paymentButtons.appendChild(button);
  }
  
  // Function to handle payment process
  function handlePayment(method, number) {
    // Define payment URLs for different methods
    const paymentURLs = {
      'Dana': `https://m.dana.id/d/ipg/new/inputphone?ipgForwardUrl=%2Fd%2Fipg%2Finputphone%3FphoneNumber%3D${number}%26ipgForwardUrl%3D%252Fd%252Fportal%252Fcashier%252Fcheckout%253FbizNo%253D20240328111212800110166216697838016%2526timestamp%253D1711577512675%2526originSourcePlatform%253DIPG%2526mid%253D216620000035833566172%2526did%253D216650000096356100174%2526sid%253D216660000096173203178%2526sign%253DwewQgDpd9wvfuvRa2tNT%25252F%25252BhPMjrU5vIti%25252B72ANJg1P13rndaLpG04MNQafydetDbVwvNi1prLdY8wDEGDBZykb82zQ0w7blryO2KK%25252FGOo1ha%25252F1HNIse0J9OhRwDwq7f9nV2J5HryfShidhBOZ7M2dLFWEsMR614Jw0IMfPkafcmkGwMCVdZWGrErE3N9vVvrL5vsmMYYhr4jtoBkMNFiz9yQyJpWAI8Fon%25252BxordFZHAsGUMYOhL1%25252F4Y0bFs`,
      'OVO': `https://ovo.com/payment?to=${number}&amount=0`,
      'BNI': `https://bni.com/payment?to=${number}&amount=0`,
      'BRI': `https://bri.com/payment?to=${number}&amount=0`,
      'BCA': `https://bca.com/payment?to=${number}&amount=0`,
      'MANDIRI': `https://mandiri.com/payment?to=${number}&amount=0`
    };
  
    // Check if the selected method exists in the payment URLs
    if (method in paymentURLs) {
      // Redirect to the payment URL for the selected method
      window.location.href = paymentURLs[method];
    } else {
      // Display an alert for unsupported payment method
      alert(`Lakukan pembayaran melalui ${method} dengan nomor ${number}`);
    }
  }
  
  // Get the dropdown for THR recipients
  const recipientDropdown = document.getElementById('recipientList');
  
  // Add event listener when the selection in the dropdown changes
  recipientDropdown.addEventListener('change', () => {
    const selectedRecipient = recipientDropdown.value;
    showPaymentMethod(selectedRecipient);
  });
  