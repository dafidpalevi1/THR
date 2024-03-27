amount: amount,

            account: bankAccountNumber,

            message: message

            // tambahkan parameter lain sesuai dengan dokumentasi API Mandiri

        });

        // Tanggapi hasil pembayaran

        console.log('Pembayaran berhasil:', response.data);

        return response.data;

    } catch (error) {

        console.error('Pembayaran gagal:', error.response.data);

        throw error;

    }

}

// Contoh penggunaan

payWithMandiri(100000, '1070016980189', 'Pembayaran THR')

    .then((paymentResult) => {

        // Lakukan sesuatu dengan hasil pembayaran, misalnya tampilkan pesan sukses kepada pengguna

        console.log('Pembayaran berhasil dilakukan:', paymentResult);

    })