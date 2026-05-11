import React, { FC, useCallback, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import ActionButtons from '@components/action-buttons/ActionButtons'
import useActions from '@hooks/use-actions'
import { selectContentStatus, selectSingleResource } from '@selectors/content'
import useTypedSelector from '@hooks/use-typed-selector'
import { useParams } from 'react-router-dom'
import { redirectTo } from '@utils'
import Loading from '@components/loading/Loading'
import Error from '@components/error/Error'
import { Paths } from '@routes'
import Input from '@components/input/Input'
import InputFile from '@components/input-file/InputFile'
import Select from '@components/select/Select'
import { StudentDisability } from '@constants'
import { Content } from '@interfaces/content/content.types'
import { TopicName } from '@constants'

const dummyResource: Content = {
  id: 0,
  title: '',
  description: '',
  url: '',
  disability: StudentDisability.VISUAL,
  topic: TopicName.BASIC,
}

const ContentEdit: FC = () => {
  const params = useParams<{ id: string }>()
  const { getSingleResource, updateSingleResource } = useActions()
  const { loading, error } = useTypedSelector(selectContentStatus)
  const resourceFound = useTypedSelector(selectSingleResource)

  const [resource, setResource] = useState<Content>(dummyResource)
  const [files, setFiles] = useState<FileList>()

  const handleOnContinue = useCallback(() => {
    if (resource) {
      const formData = new FormData()

      formData.append('id', String(resource.id))
      formData.append('title', resource.title)
      formData.append('description', resource.description)
      formData.append('disability', resource.disability)
      formData.append('topic', resource.topic)

      if (files && files.length !== 0) {
        formData.append('file', files[0])
      }

      updateSingleResource(formData, redirectTo(Paths.VIEW_ALL_TOPICS))
    }
  }, [resource, files])

  useEffect(() => {
    getSingleResource({
      id: Number(params.id),
    })
  }, [])

  useEffect(() => {
    if (resourceFound) {
      setResource(resourceFound)
    }
  }, [resourceFound])

  const handleResourceChange = <K extends keyof Content>(k: K) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setResource((resource) => ({
        ...resource,
        [k]: e.target.value,
      }))
    }
  }

  return (
    <div data-testid="content-edit-page">
      <Grid container spacing={2}>
        {loading && <Loading color="primary" />}
        {error && <Error>{error}</Error>}

        <Grid item md={12} sm={12} xs={12}>
          <Input
            label="Titulo"
            value={resource.title}
            handleOnChange={handleResourceChange('title')}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12}>
          <Input
            type="text"
            label="Descripcion"
            multiline
            rows={4}
            value={resource.description}
            handleOnChange={handleResourceChange('description')}
          />
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <Select
            label="Contenido del tipo"
            value={resource.topic}
            required={false}
            optionValues={Object.values(TopicName)}
            handleOnChange={(e) => {
              setResource((resource) => ({
                ...resource,
                topic: e.target.value as TopicName,
              }))
            }}
          />
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <Select
            label="Dirigido a tipo de discapacidad"
            value={resource.disability}
            required={false}
            optionValues={Object.values(StudentDisability)}
            handleOnChange={(e) => {
              setResource((resource) => ({
                ...resource,
                disability: e.target.value as StudentDisability,
              }))
            }}
          />
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <InputFile
            files={files}
            accept="image/png, image/jpeg, video/*"
            label="Subir archivo"
            handleOnChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFiles(e.target.files)
              }
            }}
          />
        </Grid>

        {/* Action buttons */}
        <ActionButtons
          labelForSecondButton="Eliminar"
          colorForSecondButton="error"
          handleFirstButtonCallback={handleOnContinue}
          handleSecondButtonCallback={redirectTo(Paths.VIEW_ALL_TOPICS)}
        />
      </Grid>
    </div>
  )
}

export default ContentEdit
