import type { LoaderFunction } from 'react-router'

const signupLoader: LoaderFunction = async ({ request, params }) => {
  //let team = await fetchTeam(params.teamId)
  const user = { name: 'admin', role: 'admin' }
  return { user }
}

export { signupLoader }
