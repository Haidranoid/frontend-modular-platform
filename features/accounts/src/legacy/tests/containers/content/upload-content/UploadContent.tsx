import React, { FC, useState } from 'react'
import { Grid } from '@mui/material'
import useTypedSelector from '@hooks/use-typed-selector'
import useActions from '@hooks/use-actions'
import ActionButtons from '@components/action-buttons/ActionButtons'
import Error from '@components/error/Error'
import Loading from '@components/loading/Loading'
import { selectContentStatus } from '@selectors/content'
import InputFile from '@components/input-file/InputFile'
import { redirectTo } from '@utils'
import { Paths } from '@routes'
import Input from '@components/input/Input'
import { StudentDisability } from '@constants'
import Select from '@components/select/Select'
import { TopicName } from '@constants'

const UploadContent: FC = () => {
  const { uploadContent } = useActions()
  const { error, loading } = useTypedSelector(selectContentStatus)

  const [title, setTile] = useState('')
  const [description, setDescription] = useState('')
  const [disability, setDisability] = useState(StudentDisability.VISUAL)
  const [topic, setTopic] = useState(TopicName.BASIC)
  const [files, setFiles] = useState<FileList>()

  const handleOnContinue = () => {
    if (files && files.length !== 0) {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('description', description)
      formData.append('disability', disability)
      formData.append('topic', topic)
      formData.append('file', files[0])

      uploadContent(formData, redirectTo(Paths.VIEW_ALL_TOPICS))
    }
  }

  return (
    <>
      <Grid container spacing={2} data-testid="upload-content-page">
        {loading && <Loading color="primary" />}

        <Grid item md={12} sm={12} xs={12}>
          <Input
            label="Titulo"
            value={title}
            handleOnChange={(e) => setTile(e.target.value)}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12}>
          <Input
            type="text"
            label="Descripcion"
            multiline
            rows={4}
            value={description}
            handleOnChange={(e) => setDescription(e.target.value)}
          />
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <Select
            label="Dirigido al tipo de discapacidad"
            value={disability}
            required={false}
            optionValues={Object.values(StudentDisability)}
            handleOnChange={(e) => setDisability(e.target.value as StudentDisability)}
          />
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <Select
            label="Contenido del tipo"
            value={topic}
            required={false}
            optionValues={Object.values(TopicName)}
            handleOnChange={(e) => setTopic(e.target.value as TopicName)}
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

        <Grid item md={6} sm={6} xs={12}></Grid>
        {/* Action buttons */}
        <ActionButtons
          handleFirstButtonCallback={handleOnContinue}
          handleSecondButtonCallback={redirectTo(Paths.VIEW_ALL_TOPICS)}
        />
      </Grid>
      {error && (
        <Grid item md={6} sm={12} xs={12}>
          <br />
          <Error>{error}</Error>
        </Grid>
      )}
    </>
  )
}

export default UploadContent
