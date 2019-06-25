const moip = require('moip-sdk-node').default({
  accessToken: '0f71060f10e84e8ca8afdf599ba8eb76_v2',
  production: false
})

moip.customer.create({
  ownId: '123',
  fullname: 'Jose Silva',
  email: 'jose_silva0@email.com',
  birthDate: '1988-12-30',
  taxDocument: {
    type: 'CPF',
    number: '22288866644'
  },
  phone: {
    countryCode: '55',
    areaCode: '11',
    number: '55552266'
  },
  shippingAddress: {
    city: 'Sao Paulo',
    complement: '10',
    district: 'Itaim Bibi',
    street: 'Avenida Faria Lima',
    streetNumber: '500',
    zipCode: '01234000',
    state: 'SP',
    country: 'BRA'
  }
}).then((response) => {
  console.log(response.message)
}).catch((err) => {
  console.log(err)
});