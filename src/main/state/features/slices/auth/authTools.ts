import { SliceNames } from '@constants'
import createSliceTools from '@utils/features/slice-tools/createSliceTools'
import authApi from '@features/slices/auth/authApi'

const authTools = createSliceTools(SliceNames.Auth, authApi)

const authThunks = authTools.thunks

export { authThunks }
export default authTools
