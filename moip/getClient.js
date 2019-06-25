const moip = require('moip-sdk-node').default({
  accessToken: '0f71060f10e84e8ca8afdf599ba8eb76_v2',
  production: false
})

moip.customer.getOne('CUS-FHETHR1FY5PO')
  .then((response) => {
    console.log(response.body)
  }).catch((err) => {
    console.log(err)
  });
