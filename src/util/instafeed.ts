import { buildUrl } from 'react-instafeed'
import instafeed from 'react-instafeed'

export const options = {
  accessToken: process.env.GATSBY_IG_TOKEN,
  clientId: process.env.GATSBY_IG_ID,
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: '3090055275',
  limit: 8,
}

export const instagramUrl = buildUrl(options)
export const data = instafeed(options)
