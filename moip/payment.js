const moip = require('moip-sdk-node').default({
  accessToken: '0f71060f10e84e8ca8afdf599ba8eb76_v2',
  production: false
})

moip.payment.create('1', {
  installmentCount: 1,
  fundingInstrument: {
    method: 'CREDIT_CARD',
    creditCard: {
      hash: 'gYPjYp+qCuRcBuNo4arqkWPrpsPpuUIuQSEBTuqQQYhhFUGX/k0ffDrppRMlH/DAo/Q7iPHiQggCGzqloziFlqG0C15JXFEeZiQtQ7mOlbIDuuipgKZfEYx9mCbwWunqWkviddoHmcZrf0CZA85/JVm7+Ppc+tIib4cErVKe3dYJCRTmWrVagcblpT8N8F5hZj6iWj4gdKNNIeOyNx4vQND3c1lSeK+emzR9ZP/x+FNBitzFkYA6OYv9rENmB1zCp1qsJi0peTsTPxxLFopN4I+Thwciii86r20+ZwLay+b++/QTaeZqCVmP68cIiQaORf6kknmd6rQtqIas/ghYVw==',
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
  console.log(err)
});
