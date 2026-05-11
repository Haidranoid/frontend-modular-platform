import React, { FC, useEffect } from 'react'
import { FormControl, Grid } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'
import useActions from '@hooks/use-actions'
import useTypedSelector from '@hooks/use-typed-selector'
import Loading from '../../../components/loading/Loading'
import Error from '../../../components/error/Error'
import { useParams } from 'react-router-dom'
import { selectResourcesByTopic, selectTopicStatus } from '@selectors/topics'
import ResourceAccordion from '../resource-accordion/ResourceAccordion'
import { selectCurrentUser } from '@selectors/authentication'
import { UserRoles } from '@constants'
import NoContent from '@experimental/no-content/NoContent'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
)

const ResourcesByTopic: FC = () => {
  const params = useParams<{ topic: string }>()
  const classes = useStyles()
  const { getResourcesByTopic } = useActions()
  const resources = useTypedSelector(selectResourcesByTopic)
  const { loading, error } = useTypedSelector(selectTopicStatus)
  const user = useTypedSelector(selectCurrentUser)
  const isStudent = user?.role === UserRoles.STUDENT

  useEffect(() => {
    getResourcesByTopic({
      topic: params.topic,
    })
  }, [])

  return (
    <div data-testid="resources-by-topic-page">
      {loading && <Loading color="primary" />}

      {error && (
        <Grid item md={6} sm={12} xs={12}>
          <FormControl fullWidth className={classes.formControl} size={'small'}>
            <Error>{error}</Error>
          </FormControl>
        </Grid>
      )}

      {!loading && resources.length !== 0 ? (
        resources.map((resource, index) => (
          <ResourceAccordion key={index} resource={resource} isStudent={isStudent} />
        ))
      ) : (
        <NoContent topic={params.topic} />
      )}
    </div>
  )
}

export default ResourcesByTopic
