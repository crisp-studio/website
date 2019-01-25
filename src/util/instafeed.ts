import { buildUrl } from 'react-instafeed'
import instafeed from 'react-instafeed'

export const options = {
  accessToken: '8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9',  
  // Crisp: 3090055275.1677ed0.7323fcce6c7b4d19be8e4b0302084eb4
  clientId: '924f677fa3854436947ab4372ffa688d',
  // clientId: '5e81bc35f1b444588d55feaad21783d3',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: '8987997106',
  limit: 8,
  // Crisp userID: 3090055275
}

export const instagramUrl = buildUrl(options)
export const data = instafeed(options)
