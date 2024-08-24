
const express = require('express');
const app = express();

app.use(express.json());

let payments = {};

// Ödeme işlemi başlatma
app.post('/payment', (req, res) => {
    const { amount, cardNumber } = req.body;

    if (cardNumber === '4242424242424242' && amount > 0) {
        const transactionId = Math.floor(Math.random() * 1000000000).toString();
        payments[transactionId] = {
            status: 'pending',
            amount: amount,
            currency: 'USD'
        };

        return res.status(200).json({
            success: true,
            message: 'Payment initiated successfully',
            transactionId: transactionId
        });
    } else {
        return res.status(400).json({
            success: false,
            message: 'Invalid payment details'
        });
    }
});

// Ödeme sonucu kontrol etme
app.get('/payment/result', (req, res) => {
    const { transactionId } = req.query;

    if (payments[transactionId]) {
        // Sahte bir şekilde ödemeyi başarılı yapıyoruz
        payments[transactionId].status = 'success';

        return res.status(200).json({
            success: true,
            transactionId: transactionId,
            status: payments[transactionId].status,
            amount: payments[transactionId].amount,
            currency: payments[transactionId].currency
        });
    } else {
        return res.status(404).json({
            success: false,
            message: 'Transaction not found'
        });
    }
});

// Sunucu başlatma
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
