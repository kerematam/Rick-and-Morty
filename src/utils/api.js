import request from 'utils/request'

/**
 * Converts object into query string
 *
 * @param  {object} params  Model data eg. {username : "kerem", a : "2"}
 *
 * @return {string}         Returns url query format eg. username="kerem"&b="3"
 */
export const getQueryString = params =>
  Object.keys(params)
    .map(key => key + '=' + params[key])
    .join('&')

const baseURL = 'https://rickandmortyapi.com/'
const baseRoute = 'api/'
const queryRoute = 'character/'

export const api = {
  getCharacters: queryParams => {
    const requestURL =
      baseURL + baseRoute + queryRoute + '/?' + getQueryString(queryParams)
    return request(requestURL)
  },
  getCharacterById: id => {
    const requestURL = baseURL + baseRoute + queryRoute + '/' + id
    return request(requestURL)
  },
  getEpisodeByUrl: requestURL => {
    return request(requestURL)
  },
}
