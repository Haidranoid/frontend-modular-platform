import React, { FC, useEffect } from 'react'
import { Grid, FormControl } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'
import useActions from '@hooks/use-actions'
import useTypedSelector from '@hooks/use-typed-selector'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'
import { selectAllTopics, selectTopicStatus } from '@selectors/topics'
import TopicCard from '../../components/topic-card/TopicCard'
import TopicsContainerStyled from './Topics.styled'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
)

const Topics: FC = () => {
  const classes = useStyles()
  const { getAllTopics } = useActions()
  const topics = useTypedSelector(selectAllTopics)
  const { loading, error } = useTypedSelector(selectTopicStatus)

  useEffect(() => {
    getAllTopics()
  }, [])

  return (
    <div data-testid="topics-page">
      {loading && <Loading color="primary" />}

      {error && (
        <Grid item md={6} sm={12} xs={12}>
          <FormControl fullWidth className={classes.formControl} size={'small'}>
            <Error>{error}</Error>
          </FormControl>
        </Grid>
      )}

      {topics.length !== 0 && (
        <TopicsContainerStyled>
          {topics.map(({ id, topic, description }) => (
            <TopicCard key={id} topic={topic} description={description} />
          ))}
        </TopicsContainerStyled>
      )}
    </div>
  )
}

export default Topics
