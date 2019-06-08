# api-rest-node

## Establishment schema

```json
{
  "_id": "<mongo_generated_id>",
  "name": "<name>",
  "description": "<description>",
  "pricing": [
    {
      "ticketType": "<ticket_type>",
      "price": "<price>",
      "coin": "<coin>"
    }
  ]
}
}
```

## User schema

```json
{
  "_id": "<mongo_generated_id>",
  "name": "<name>",
  "cpf": "<cpf>",
  "password": "<password>",
  "moneyAmount": [
    {
      "coinType": "R$",
      "value": "0",
    }
  ],
  "registrations": [
    {
      "registration": "2160000",
      "establishments": [
        {
          "id": "<establishmentId>"
        }
      ]
    }
  ]

}
```
