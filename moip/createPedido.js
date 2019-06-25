const moip = require('moip-sdk-node').default({
  accessToken: '0f71060f10e84e8ca8afdf599ba8eb76_v2',
  production: false
})

moip.order.create({
  ownId: 'meu_id_order',
  amount: {
    currency: 'BRL',
  },
  items: [{
    product: 'Saldo',
    quantity: 1,
    price: 1000
  }],

  customer: {
    id: 'CUS-FHETHR1FY5PO',
  }
}).then((response) => {
  console.log(response.body)
}).catch((err) => {
  console.log(err)
});
