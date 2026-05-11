import React, { FC } from 'react'
import { Paths } from '@routes'
import { Content } from '@interfaces/content/content.types'
import { useHistory } from 'react-router-dom'
import { Theme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
} from '@mui/material'
import { Cancel, ExpandMore, Save } from '@mui/icons-material'
import { formatDescription, handleSpaceEvent, textToSpeech, translate } from '@utils'
import ResourceContainer from './ResourceContainer.styled'
import ImageWithSkeletonMUI from '@components/image-with-skeleton-mui/ImageWithSkeletonMUI'
import useActions from '@hooks/use-actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionSummary: {
      display: 'flex',
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px',
      paddingTop: '5px',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(10),
      },
    },
    heading: {
      flex: 1,
      color: theme.palette.text.primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(10),
      },
      [theme.breakpoints.down('md')]: {
        textAlign: 'left',
        fontSize: theme.typography.pxToRem(15),
      },
    },
    secondaryHeading: {
      flex: 1,
      textAlign: 'right',
      color: theme.palette.text.secondary,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(10),
      },
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.pxToRem(15),
      },
    },
    avatar: {
      color: 'white',
      backgroundColor: theme.palette.secondary.main,
      margin: '0 10px',
      [theme.breakpoints.down('sm')]: {
        margin: '0 0 5px 0',
        fontSize: theme.typography.pxToRem(14),
      },
    },
    userContainer: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        flexDirection: 'column',
      },
    },
    equationDescription: {},
  }),
)

interface ResourceAccordionProps {
  resource: Content
  isStudent: boolean
}

const ResourceAccordion: FC<ResourceAccordionProps> = (props) => {
  const {
    resource: { id, title, url, disability, description },
    isStudent,
  } = props
  const classes = useStyles()
  const history = useHistory()
  const { resourceRead } = useActions()

  return (
    <Box sx={{ width: '100%', margin: '0 auto' }}>
      <Accordion defaultExpanded role="presentation">
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id={id.toString()}
          className={classes.accordionSummary}
        >
          <div className={classes.heading}>{`Tema: ${title}`}</div>
          <div
            className={classes.secondaryHeading}
            aria-disabled={true}
            aria-hidden={true}
          >
            {!isStudent && `Discapacidad: ${translate(disability)}`}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ResourceContainer>
            <div>
              <ImageWithSkeletonMUI url={url} title={title} />
            </div>
            <div
              role="button"
              aria-label={`Titulo del tema: ${title}. para iniciar la explicación da click o enter para comenzar`}
              onClick={() => {
                textToSpeech(description)
                if (isStudent) {
                  resourceRead({ resourceId: id })
                }
              }}
              tabIndex={0}
              onKeyDown={handleSpaceEvent}
            >
              {formatDescription(description)}
            </div>
          </ResourceContainer>
        </AccordionDetails>

        {/* Action buttons */}
        {!isStudent && (
          <Grid container spacing={4} style={{ padding: '20px' }}>
            <Grid item md={6} sm={12} xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                endIcon={<Save />}
                onClick={() => history.push(`/content/edit/${id}`)}
                size={'small'}
              >
                {' '}
                Editar
              </Button>
            </Grid>

            {/* Cancel button */}
            <Grid item md={6} sm={12} xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="warning"
                endIcon={<Cancel />}
                onClick={() => history.push(Paths.VIEW_ALL_TOPICS)}
                size={'small'}
              >
                {' '}
                Volver
              </Button>
            </Grid>
          </Grid>
        )}
      </Accordion>
    </Box>
  )
}

export default ResourceAccordion
