import type { LoaderFunction } from 'react-router'

const homeLoader: LoaderFunction = async () => {
  //let team = await fetchTeam(params.teamId)
  const user = { name: 'admin', role: 'admin' }
  return { user }
}

export { homeLoader }
