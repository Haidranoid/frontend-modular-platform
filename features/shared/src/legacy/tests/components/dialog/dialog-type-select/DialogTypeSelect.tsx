import React, { FC } from 'react'
import { List, ListItem, ListItemText } from '@mui/material'

interface DialogTypeSelectProps {
  values: string[]
  onResponse: (valueSelected: string) => void
  onClose: () => void
}

const DialogTypeSelect: FC<DialogTypeSelectProps> = (props) => {
  return (
    <List>
      {props.values.map((value) => (
        <ListItem
          key={value}
          onClick={() => {
            props.onResponse(value)
            props.onClose()
          }}
        >
          <ListItemText primary={value} />
        </ListItem>
      ))}
    </List>
  )
}

export default DialogTypeSelect
