const moip = require('moip-sdk-node').default({
  accessToken: '0f71060f10e84e8ca8afdf599ba8eb76_v2',
  production: false
})

moip.payment.create('ORD-1PPMDMNND45L', {
  installmentCount: 1,
  fundingInstrument: {
    method: 'CREDIT_CARD',
    creditCard: {
      id: 'CRC-5LOFNQ72IU8G',
      cvc: '123',
      holder: {
        fullname: 'Roberto Oliveira',
        birthdate: '1988-12-30',
        taxDocument: {
          type: 'CPF',
          number: '84302737950'
        },
        phone: {
          countryCode: '55',
          areaCode: '11',
          number: '25112511'
        }
      }
    }
  }
}).then((response) => {
  console.log(response.body)
}).catch((err) => {
  console.log(err.message)
})
