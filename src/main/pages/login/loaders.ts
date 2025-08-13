import type { LoaderFunction } from 'react-router'

export const loginLoader: LoaderFunction = async () => {
  //let team = await fetchTeam(params.teamId)
  const user = { name: 'admin', role: 'admin' }
  return { user }
}
