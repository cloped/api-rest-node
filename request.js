const qrCode = process.argv[2];
const establishmentId = '5d11e5b50b933f0041f34398';
const axios = require('axios');
// ec2-54-209-181-18.compute-1.amazonaws.com
console.log('qr code', qrCode);
const init = async () => {
        try {
                const response = await axios.post(`http://localhost:3333/transactions/transaction/${qrCode}/${establishmentId}`,
                        {
                                'type': 'checkout',
                        },
                        {
                                params: {
                                        providerId: qrCode,
                                        recipientId: establishmentId,
                                },
                                'Content-Type': 'application/json'
                        });
                console.log(response.data, response.status);
                process.exit(0);
        } catch (e) {
                console.log(e.response.data);
                process.exit(-1);
        }
}

init();

