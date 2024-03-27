// Function untuk menampilkan metode pembayaran
function showPaymentMethod(selectedRecipient) {
    const paymentMethodSection = document.getElementById('paymentMethodSection');
    paymentMethodSection.style.display = 'block';
  }

  // Function untuk menangani klik pada tombol pembayaran Dana
  function handleDanaPayment() {
    // Ganti URL sesuai dengan skema aplikasi Dana di perangkat pengguna
    window.location.href = 'dana://payment?amount=100000&recipient=0895638066066'; // Ganti dengan nilai yang sesuai
  }

  // Ambil dropdown daftar penerima THR
  const recipientDropdown = document.getElementById('recipientList');

  // Tambahkan event listener ketika pilihan pada dropdown diubah
  recipientDropdown.addEventListener('change', () => {
    const selectedRecipient = recipientDropdown.value;
    showPaymentMethod(selectedRecipient);
  });

  // Ambil tombol pembayaran Dana
  const danaPaymentButton = document.getElementById('danaPayment');

  // Tambahkan event listener untuk klik pada tombol pembayaran Dana
  danaPaymentButton.addEventListener('click', handleDanaPayment);