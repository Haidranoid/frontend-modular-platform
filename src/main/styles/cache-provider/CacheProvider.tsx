import React, { FC } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider as CacheProviderMUI } from '@emotion/react'

function createEmotionCache() {
  return createCache({ key: 'mui', prepend: true })
}

const cache = createEmotionCache()

interface CacheProviderProps {
  children: React.ReactNode
}

const CacheProvider: FC<CacheProviderProps> = ({ children }) => {
  return <CacheProviderMUI value={cache}>{children}</CacheProviderMUI>
}

export default CacheProvider
