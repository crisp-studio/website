import { buildUrl } from 'react-instafeed'
import instafeed from 'react-instafeed'

export const options = {
  accessToken: '3090055275.1677ed0.7323fcce6c7b4d19be8e4b0302084eb4',
  clientId: '5e81bc35f1b444588d55feaad21783d3',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: '3090055275',
  limit: 4,
}

export const instagramUrl = buildUrl(options)
export const data = instafeed(options)
