import { FC, useState } from 'react'
import {
  PrimitiveValue,
  NullValue,
  ItemButton,
  KeyLabel,
  Container,
} from './ObjectExplored.styled'

export type ObjectExplorerProps = {
  data: any
  $level?: number
}

export const ObjectExplorer: FC<ObjectExplorerProps> = ({ data, $level = 0 }) => {
  const [expandedKeys, setExpandedKeys] = useState<string[]>([])

  if (data === null) return <NullValue>null</NullValue>
  if (typeof data !== 'object')
    return <PrimitiveValue>{JSON.stringify(data)}</PrimitiveValue>

  const toggleKey = (key: string) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    )
  }

  return (
    <Container $level={$level}>
      {Object.entries(data).map(([key, value]) => {
        const isExpandable = typeof value === 'object' && value !== null
        const isExpanded = expandedKeys.includes(key)

        return (
          <div key={key}>
            <ItemButton onClick={() => isExpandable && toggleKey(key)}>
              {isExpandable ? (isExpanded ? '▼' : '▶') : '•'}
              <KeyLabel>{key}:</KeyLabel>
              {!isExpandable && <PrimitiveValue>{JSON.stringify(value)}</PrimitiveValue>}
            </ItemButton>

            {isExpanded && isExpandable && (
              <ObjectExplorer data={value} $level={$level + 1} />
            )}
          </div>
        )
      })}
    </Container>
  )
}
