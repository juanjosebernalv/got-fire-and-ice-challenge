import { env } from 'app/config/env'

export const iceAndFireUrls = {
  houses: {
    'all': `${env.GOT_HOSTNAME}/houses`,
    'members': `${env.GOT_HOSTNAME}/characters`
  }
}