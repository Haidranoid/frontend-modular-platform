import React, { Dispatch, FC, SetStateAction } from 'react'
import { DialogType, InputType, OnResponseCallback } from './Dialog.types'
import {
  Button,
  Dialog as DialogMUI,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import DialogTypeSelect from './dialog-type-select/DialogTypeSelect'

export interface DialogProps {
  dialogControls: [boolean, Dispatch<SetStateAction<boolean>>]
  title: string
  dialogType: DialogType
  children: React.ReactNode
  onResponse: OnResponseCallback
  onClose?: Callback
  inputLabel?: string
  inputType?: InputType
  selectValues?: Array<string>
}

const Dialog: FC<DialogProps> = (props) => {
  const {
    dialogControls,
    title,
    dialogType,
    onClose,
    inputLabel,
    inputType,
    selectValues = [],
    onResponse,
    children,
  } = props

  const [isOpen, setIsOpen] = dialogControls

  const onResponseHandler = (response: boolean | string) => {
    onResponse(response)
  }

  const onCloseHandler = () => {
    onClose?.()
    setIsOpen(false)
  }

  return (
    <div
      role="dialog"
      aria-labelledby="Una ventana emergente que te pide confirmar o cancelar"
    >
      <DialogMUI open={isOpen} onClose={onCloseHandler}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        {dialogType === 'select' && (
          <DialogTypeSelect
            values={selectValues}
            onResponse={onResponseHandler}
            onClose={onCloseHandler}
          />
        )}

        {dialogType !== 'select' && (
          <React.Fragment>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {children}
              </DialogContentText>
              {dialogType === 'input' && (
                <TextField
                  margin="dense"
                  id="input-value"
                  label={inputLabel || 'Input'}
                  type={inputType || 'text'}
                  fullWidth
                />
              )}
            </DialogContent>
            <DialogActions>
              {dialogType === 'default' && (
                <Button onClick={onCloseHandler} color="primary">
                  Continuar
                </Button>
              )}
              {(dialogType === 'confirmation' || dialogType === 'input') && (
                <React.Fragment>
                  <Button
                    onClick={() => {
                      onResponseHandler(true)
                      onCloseHandler()
                    }}
                    color="primary"
                  >
                    Continuar
                  </Button>
                  <Button
                    onClick={() => {
                      onResponseHandler(false)
                      onCloseHandler()
                    }}
                    color="primary"
                  >
                    Cancelar
                  </Button>
                </React.Fragment>
              )}
            </DialogActions>
          </React.Fragment>
        )}
      </DialogMUI>
    </div>
  )
}

export default Dialog
