const moip = require('moip-sdk-node').default({
  accessToken: '0f71060f10e84e8ca8afdf599ba8eb76_v2',
  production: false
})

moip.customer.createCreditCard('CUS-FHETHR1FY5PO', {
  method: "CREDIT_CARD",
  creditCard: {
    expirationMonth: "05",
    expirationYear: "20",
    number: "4012011037141112",
    cvc: "123",
    holder: {
      fullname: "Jose Portador da Silva",
      birthdate: "1988-12-30",
      taxDocument: {
        type: "CPF",
        number: "01322734277"
      },
      phone: {
        countryCode: "55",
        areaCode: "92",
        number: "988888888"
      }
    }
  }
}).then((response) => {
  console.log(response.body)
}).catch((err) => {
  console.log(err)
});

// { creditCard:
//   { id: 'CRC-5LOFNQ72IU8G',
//     brand: 'VISA',
//     first6: '401200',
//     last4: '1112',
//     store: true },
//  card: { brand: 'VISA', store: true },
//  isPresential: false,
//  method: 'CREDIT_CARD' }
