function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return response.json()
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export default async function request(url, options) {
  const fetchResponse = await fetch(url, options)
  const response = await checkStatus(fetchResponse)
  return parseJSON(response)
}
