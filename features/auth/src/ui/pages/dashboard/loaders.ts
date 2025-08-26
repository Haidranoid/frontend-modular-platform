import type { LoaderFunction } from 'react-router'

export const dashboardLoader: LoaderFunction = async () => {
  //let team = await fetchTeam(params.teamId)
  const user = { name: 'admin', role: 'admin' }
  return { user }
}

export const protectedDashboardLoader: LoaderFunction = async () => {
  //let team = await fetchTeam(params.teamId)
  const user = { name: 'admin', role: 'admin' }
  return { user }
}
