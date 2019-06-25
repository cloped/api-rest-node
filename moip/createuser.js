const moip = require('moip-sdk-node').default({
  accessToken: '0f71060f10e84e8ca8afdf599ba8eb76_v2',
  production: false
})

moip.account.create({
  email: {
    address: "dev.moip@labs.moip.com.br"
  },
  person: {
    name: "Runscope",
    lastName: "Random 9123",
    taxDocument: {
      type: "CPF",
      number: "123.456.798-91"
    },
    identityDocument: {
      type: "RG",
      number: "434322344",
      issuer: "SSP",
      issueDate: "2000-12-12"
    },
    birthDate: "1990-01-01",
    phone: {
      countryCode: "55",
      areaCode: "11",
      number: "965213244"
    },
    address: {
      street: "Av. Brigadeiro Faria Lima",
      streetNumber: "2927",
      district: "Itaim",
      zipCode: "01234-000",
      city: "São Paulo",
      state: "SP",
      country: "BRA"
    }
  },
  type: "MERCHANT",
  transparentAccount: true
}).then((response) => {
  console.log(response.body)
}).catch((err) => {
  console.log(err)
});
