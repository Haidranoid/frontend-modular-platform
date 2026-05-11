import React, { FC, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Accordion,
  AccordionDetails,
  AccordionActions,
  AccordionSummary,
  Grid,
  Button,
  Divider,
  Typography,
  Avatar,
  FormControl,
} from '@mui/material'
import { Add, ExpandMore } from '@mui/icons-material'
import { Theme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'
import useActions from '@hooks/use-actions'
import useTypedSelector from '@hooks/use-typed-selector'
import { selectAllUsers, selectUsersStatus } from '@selectors/users'
import Loading from '@components/loading/Loading'
import Dialog from '@components/dialog/Dialog'
import Error from '@components/error/Error'
import UserViewer from './user-viewer/UserViewer'
import { User } from '@interfaces/authentication/authentication.types'
import { redirectTo, translate } from '@utils'
import { Paths } from '@routes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      flexBasis: '60%',
      flexShrink: 0,
      marginRight: '10px',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: theme.typography.pxToRem(10),
      },
    },
    secondaryHeading: {
      color: theme.palette.text.secondary,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: theme.typography.pxToRem(10),
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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    text: {
      fontSize: theme.typography.pxToRem(12),
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.typography.pxToRem(8),
      },
    },
  }),
)

const Users: FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const { getAllUsers, deleteUser } = useActions()
  const users = useTypedSelector(selectAllUsers)
  const { loading, error } = useTypedSelector(selectUsersStatus)

  const [openDialog, setOpenDialog] = useState(false)
  const [payloadDialog, setPayloadDialog] = useState<User | null>(null)

  const handleEditUser = (redirectTo: string) => () => history.push(redirectTo)
  const handleDialogDeleteUser = (user: User) => () => {
    setOpenDialog(true)
    setPayloadDialog(user)
  }
  const handleOnDialogResponse = (response: string | boolean) => {
    if (response && payloadDialog) {
      deleteUser(
        {
          id: payloadDialog.id,
        },
        () => redirectTo(Paths.USERS),
      )

      setPayloadDialog(null)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  // throw new Error("Oops! I broke 💥");
  return (
    <div data-testid="users-page">
      {loading && <Loading color="primary" />}

      {/*Delete User dialog*/}
      <Dialog
        dialogControls={[openDialog, setOpenDialog]}
        title="Eliminar usuario?"
        dialogType="confirmation"
        onResponse={handleOnDialogResponse}
      >
        Este usuario sera eliminado, esta acción no podra ser revertida
      </Dialog>

      <Grid container spacing={2}>
        {/*Create user button*/}
        <Grid item md={6} sm={12} xs={12}>
          <Button
            role="button"
            fullWidth
            variant="contained"
            color="secondary"
            endIcon={<Add />}
            onClick={redirectTo(Paths.CREATE_USER)}
          >
            Nuevo usuario
          </Button>
        </Grid>

        {/* Error Message */}
        {error && (
          <Grid item md={6} sm={12} xs={12}>
            <FormControl fullWidth className={classes.formControl} size={'small'}>
              <Error>{error}</Error>
            </FormControl>
          </Grid>
        )}
      </Grid>
      <br />

      <div role="list">
        {users.map((user) => (
          <div key={user.id}>
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              role="listitem"
              style={{ marginBottom: '10px' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                id={user.id.toString()}
                role="tab"
              >
                <Typography component={'span'} className={classes.heading}>
                  <div className={classes.userContainer}>
                    <Avatar alt="Remy Sharp" className={classes.avatar}>
                      {user.firstName[0].toUpperCase()}
                    </Avatar>
                    {`${user.firstName} ${user.lastName}`}
                  </div>
                </Typography>
                <Typography component={'span'} className={classes.secondaryHeading}>
                  {translate(user.role)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'}>
                  <UserViewer mode="read" user={user} />
                </Typography>
              </AccordionDetails>
              <Divider />
              <AccordionActions>
                <Button
                  role="button"
                  size="small"
                  color="primary"
                  onClick={handleEditUser(`/users/edit/${user.id}`)}
                >
                  Editar
                </Button>
                <Button size="small" onClick={handleDialogDeleteUser(user)}>
                  Eliminar
                </Button>
              </AccordionActions>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
