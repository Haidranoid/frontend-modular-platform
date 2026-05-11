import React, { FC, useRef, useState } from 'react'
import clsx from 'clsx'
import { Link, useHistory } from 'react-router-dom'
import {
  AppBar,
  Avatar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  ChevronLeft,
  CloudUpload,
  ExitToApp,
  Menu,
  People,
  PermMedia,
} from '@mui/icons-material'
import { Paths } from '@routes'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import ItesiLogoPng from '@assets/images/itesi_logo.png'
import useActions from '@hooks/use-actions'
import useTypedSelector from '@hooks/use-typed-selector'
import { selectAuthStatus, selectCurrentUser } from '@selectors/authentication'
import { handleSpaceEvent } from '@utils'
import Loading from '@components/loading/Loading'
import { isUserAllowed } from '@routes/helpers'
import { UserRoles } from '@constants'
import useMediaQuery from '@mui/material/useMediaQuery'

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(6),
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    paddingLeft: '40px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: '10px',
    paddingRight: '10px',
    // Focus-visible pseudo-class
    '&:focus-visible': {
      outline: 'none',
    },
  },
  nested: {
    paddingLeft: theme.spacing(2),
    borderLeft: `2px solid ${theme.palette.divider}`,
  },
  listItem: {
    cursor: 'pointer',
    padding: '6px',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      padding: '8px 12px',
    },
  },
  listItemNested: {
    padding: '4px 8px',
    [theme.breakpoints.up('sm')]: {
      padding: '6px 12px',
    },
  },
  avatar: {
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    cursor: 'pointer',
  },
  title: {
    fontSize: theme.typography.pxToRem(22),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(16),
    },
  },
  customWidth: {
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(12),
    },
  },
}))

interface NavigationMenuProps {
  children: React.ReactNode
}

const NavigationMenu: FC<NavigationMenuProps> = ({ children }) => {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const history = useHistory()
  const matches = useMediaQuery('screen and (max-width: 1025px)')
  const classes = useStyles()
  const { logout } = useActions()
  const currentUser = useTypedSelector(selectCurrentUser)
  const { loading } = useTypedSelector(selectAuthStatus)

  const [title, setTitle] = useState('SIENMAT')
  const [isOpen, setIsOpen] = useState(!matches)

  const handleListItemClicked = (title: string) => () => {
    setTitle(title)
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.focus()
      }
    }, 100)
  }

  if (!currentUser) {
    return <div>{children}</div>
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        role="navigation"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="Click para abrir el menu de navegación"
            color="inherit"
            data-testid="open-drawer"
            onClick={() => setIsOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: isOpen,
            })}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Tooltip
              title={currentUser.email}
              PopperProps={{
                disablePortal: true,
              }}
              disableFocusListener
              disableHoverListener
              disableTouchListener
            >
              <Avatar
                alt="Avatar"
                className={classes.avatar}
                onClick={() => {
                  history.push('/')
                  setTitle('SIENMAT')
                  //setShowTooltip((v) => !v)
                }}
              >
                {currentUser.firstName[0].toUpperCase()}
              </Avatar>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        aria-label="Navegación principal del menu"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
      >
        <div role="toolbar" className={classes.toolbar}>
          <img
            onClick={() => {
              history.push('/')
              setTitle('SIENMAT')
            }}
            alt="logo del instituto tecnologico superior de irapuato"
            src={ItesiLogoPng}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              padding: '5px',
            }}
          />
          <IconButton
            aria-hidden={!isOpen}
            tabIndex={!isOpen ? -1 : 0} // prevent keyboard focus
            aria-label={isOpen ? 'Click para cerrar el menu de navegación' : undefined}
            onClick={() => setIsOpen(false)}
            onKeyDown={handleSpaceEvent}
          >
            {isOpen && <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List role="presentation">
          <ListItem
            aria-label="Link para ir al contenido disponible"
            key="Contenido"
            component={Link}
            to="/topics"
            className={classes.listItem}
            onClick={handleListItemClicked('Contenido')}
            onKeyDown={handleSpaceEvent}
          >
            <ListItemIcon>
              <PermMedia />
            </ListItemIcon>
            <ListItemText>Contenido</ListItemText>
          </ListItem>
        </List>
        {isUserAllowed(
          currentUser,
          new Set<UserRoles>([UserRoles.ADMIN, UserRoles.TEACHER]),
        ) && (
          <>
            <Divider />
            <List role="presentation">
              <ListItem
                aria-label="Link para poder subir contenido nuevo"
                key="Subir Contenido"
                component={Link}
                to="/content/upload"
                className={classes.listItem}
                onClick={handleListItemClicked('Subir Contenido')}
                onKeyDown={handleSpaceEvent}
              >
                <ListItemIcon>
                  <CloudUpload />
                </ListItemIcon>
                <ListItemText primary={'Subir Contenido'} />
              </ListItem>
            </List>
          </>
        )}
        {isUserAllowed(currentUser, new Set<UserRoles>([UserRoles.ADMIN])) && (
          <>
            <Divider />
            <List role="presentation">
              <ListItem
                aria-label="Link para ver los usuarios existentes"
                key="Usuarios"
                component={Link}
                to="/users"
                className={classes.listItem}
                onClick={handleListItemClicked('Usuarios')}
                onKeyDown={handleSpaceEvent}
              >
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary={'Usuarios'} />
              </ListItem>
            </List>
          </>
        )}

        <Divider />
        <List role="presentation">
          <ListItem
            role="button"
            tabIndex={0}
            aria-label="Click para cerrar sesión"
            className={classes.listItem}
            onClick={() => logout(undefined, () => history.push(Paths.LOGIN))}
            onKeyDown={handleSpaceEvent}
          >
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary={'Logout'} />
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.content} tabIndex={-1} ref={mainRef}>
        <Toolbar />
        {loading ? <Loading color="primary" /> : children}
      </div>
    </div>
  )
}

export default NavigationMenu
