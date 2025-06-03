import path from 'path'
import { ROOT_DIR } from './constants'

const webpackAlias = {
  '@assets': path.resolve(ROOT_DIR, 'src/assets/'),
  '@config': path.resolve(ROOT_DIR, 'src/config/'),
  '@test': path.resolve(ROOT_DIR, 'src/test/'),
  '@app': path.resolve(ROOT_DIR, 'src/main/app/'),
  '@components': path.resolve(ROOT_DIR, 'src/main/components/'),
  '@constants': path.resolve(ROOT_DIR, 'src/main/constants/'),
  '@experimental': path.resolve(ROOT_DIR, 'src/main/experimental/'),
  '@layouts': path.resolve(ROOT_DIR, 'src/main/layouts/'),
  '@lib': path.resolve(ROOT_DIR, 'src/main/lib/'),
  '@pages': path.resolve(ROOT_DIR, 'src/main/pages/'),
  '@router': path.resolve(ROOT_DIR, 'src/main/router/'),
  '@features': path.resolve(ROOT_DIR, 'src/main/features/'),
  '@hooks': path.resolve(ROOT_DIR, 'src/main/state/hooks/'),
  '@store': path.resolve(ROOT_DIR, 'src/main/state/store/'),
  '@styles': path.resolve(ROOT_DIR, 'src/main/styles/'),
  '@utils': path.resolve(ROOT_DIR, 'src/main/utils/'),
}

export default webpackAlias
