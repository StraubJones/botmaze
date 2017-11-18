import axios from 'axios'


const getPhraseResponse = (phrase) => {

  let requestUrl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/d291baf7-1ed5-4aca-98b2-d3141a3d55dd?subscription-key=' + window.configVars.LUIS_SUBSCRIPTION_KEY + '&staging=true&spellCheck=true&verbose=true&timezoneOffset=-5.0&q=' + phrase

  return axios.get(requestUrl).then((response) => {
    return response
  }).catch((error) => {
    return error
  })
}

export default {
  getPhraseResponse
}