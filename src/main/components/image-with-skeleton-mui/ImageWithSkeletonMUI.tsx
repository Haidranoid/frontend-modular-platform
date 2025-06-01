import { FC, useState } from 'react'

const DEFAULT_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sementales_H-B_monchina_400x300.jpg'

interface ImageWithSkeletonMUI {
  url: string
  title: string
}

const Skeleton: FC<{ width: string; height: string }> = ({ width, height }) => <div />
const ImageWithSkeletonMUI: FC<ImageWithSkeletonMUI> = ({ url, title }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div>
      {!loaded && <Skeleton width="400px" height="280px" />}
      <img
        src={error ? DEFAULT_IMAGE : url}
        alt={title}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setLoaded(true) // Hide skeleton even on error
          setError(true)
        }}
        //className={clsx(classes.image, { [classes.hidden]: !loaded })}
      />
    </div>
  )
}

export default ImageWithSkeletonMUI
