import path from 'path'
import { ROOT_DIR } from './constants'

const webpackAlias = {
  '@assets': path.resolve(ROOT_DIR, 'src/assets/'),
  '@config': path.resolve(ROOT_DIR, 'src/config/'),
  '@test': path.resolve(ROOT_DIR, 'src/test/'),
  '@components': path.resolve(ROOT_DIR, 'src/main/components/'),
  '@constants': path.resolve(ROOT_DIR, 'src/main/constants/'),
  '@pages': path.resolve(ROOT_DIR, 'src/main/pages/'),
  '@experimental': path.resolve(ROOT_DIR, 'src/main/experimental/'),
  '@layouts': path.resolve(ROOT_DIR, 'src/main/layouts/'),
  '@lib': path.resolve(ROOT_DIR, 'src/main/lib/'),
  '@router': path.resolve(ROOT_DIR, 'src/main/router/'),
  '@state': path.resolve(ROOT_DIR, 'src/main/state/'),
  '@actions': path.resolve(ROOT_DIR, 'src/main/state/actions/'),
  '@actions-creators': path.resolve(ROOT_DIR, 'src/main/state/actions-creators/'),
  '@hooks': path.resolve(ROOT_DIR, 'src/main/state/hooks/'),
  '@interfaces': path.resolve(ROOT_DIR, 'src/main/state/interfaces/'),
  '@reducers': path.resolve(ROOT_DIR, 'src/main/state/reducers/'),
  '@selectors': path.resolve(ROOT_DIR, 'src/main/state/selectors/'),
  '@store': path.resolve(ROOT_DIR, 'src/main/state/store/'),
  '@styles': path.resolve(ROOT_DIR, 'src/main/styles/'),
  '@utils': path.resolve(ROOT_DIR, 'src/main/utils/'),
  '@validators': path.resolve(ROOT_DIR, 'src/main/validators/'),
}

export default webpackAlias
