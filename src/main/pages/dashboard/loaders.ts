import type { LoaderFunction } from 'react-router'

const dashboardLoader: LoaderFunction = async () => {
  //let team = await fetchTeam(params.teamId)
  const user = { name: 'admin', role: 'admin' }
  return { user }
}

const protectedDashboardLoader: LoaderFunction = async () => {
  //let team = await fetchTeam(params.teamId)
  const user = { name: 'admin', role: 'admin' }
  return { user }
}

export { dashboardLoader, protectedDashboardLoader }
