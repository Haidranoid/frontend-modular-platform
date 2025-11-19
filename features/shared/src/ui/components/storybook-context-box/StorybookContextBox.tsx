import { FC, useState } from 'react'
import { Rnd } from 'react-rnd'
import {
  Content,
  ItemWrapper,
  ItemButton,
  Box,
  Header,
  HeaderInner,
  CollapseButton,
} from './StorybookContextBox.styled'
import { ObjectExplorer } from '../object-explorer'
import { Portal } from '../portal'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'

export interface ContextLocation {
  x: number
  y: number
}

export interface ContextSize {
  width: number
  height: number
}

export interface ContextBoxConfig {
  location: ContextLocation
  size: ContextSize
}

export interface ComplexItem {
  id: string
  label: string
  data: Record<string, any> | undefined
}

export type ContextBoxProps = {
  title: string
  items: ComplexItem[]
  domElement: HTMLElement
  config?: ContextBoxConfig
}

export const StorybookContextBox: FC<ContextBoxProps> = ({
  title,
  items,
  domElement,
  config,
}) => {
  const contextBoxConfig = config ?? {
    location: { x: 0, y: 0 },
    size: { width: 300, height: 500 },
  }

  const location = useLocation()
  const state = useSelector((state) => state)

  const defaultItems: ComplexItem[] = [
    // @ts-ignore
    { id: 'redux', label: 'Redux State', data: state },
    { id: 'location', label: 'React Router Location', data: location },
    ...items,
  ]

  const [expandedItems, setExpandedItems] = useState<string[]>(
    defaultItems.map((item) => item.id),
  )

  const [collapsed, setCollapsed] = useState(true)
  const [size, setSize] = useState(contextBoxConfig.size)

  const toggleItem = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    )
  }

  const toggleCollapsed = () => {
    setCollapsed((prev) => {
      if (!prev) {
        // colapsando → guardar tamaño actual
        return true
      } else {
        // expandiendo → restaurar tamaño original
        return false
      }
    })
  }

  return (
    <Portal container={domElement}>
      <Rnd
        size={{
          width: size.width,
          height: collapsed ? 42 : size.height, // <<< altura mínima cuando está colapsado
        }}
        onResizeStop={(e, dir, ref) => {
          if (!collapsed) {
            setSize({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
            })
          }
        }}
        //$disableResizing={collapsed}
        default={{
          x: contextBoxConfig.location.x,
          y: contextBoxConfig.location.y,
          width: size.width,
          height: size.height,
        }}
        dragHandleClassName="drag-handle"
        bounds="window"
      >
        <Box $isCollapsed={collapsed}>
          <Header className="drag-handle">
            <HeaderInner>
              <span>{title}</span>

              <CollapseButton
                onClick={(e) => {
                  e.stopPropagation()
                  toggleCollapsed()
                }}
              >
                {collapsed ? '▼' : '▶'}
              </CollapseButton>
            </HeaderInner>
          </Header>

          {!collapsed && (
            <Content>
              {defaultItems.map((item) => (
                <ItemWrapper key={item.id}>
                  <ItemButton onClick={() => toggleItem(item.id)}>
                    {expandedItems.includes(item.id) ? '▼' : '▶'} {item.label}
                  </ItemButton>

                  {expandedItems.includes(item.id) && (
                    <div style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                      <ObjectExplorer data={item.data} />
                    </div>
                  )}
                </ItemWrapper>
              ))}
            </Content>
          )}
        </Box>
      </Rnd>
    </Portal>
  )
}
