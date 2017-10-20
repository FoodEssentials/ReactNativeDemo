const apiKey = '9qQUNqKiSo6HNuo1C41EBWD3RkLwjsN1PIKmbPKb'

const smartlabelApi =
  'https://dev-enterprise-sl-api.labelinsight.com/api/v4/20ff77e9-75af-410d-98ff-bef2febb0df7'

const config = {
  headers: {
    'x-api-key': apiKey
  }
}

export async function getProductByUPC(upc) {
  const response = await fetch(`${smartlabelApi}/data/upc/${upc}`, config)

  if (response.ok) {
    return (await response.json()).content[0]
  }
}
