import { FC, useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { Rnd } from 'react-rnd'
import {
  Content,
  ItemWrapper,
  ItemButton,
  Box,
  HeaderV2,
  HeaderInner,
  CollapseButton,
  Panel,
  Body,
} from './ContextBox.styled'
import { ObjectExplorer } from '../object-explorer'
import { Portal } from '../portal'

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
  reducerId: string
  items: ComplexItem[]
  domElement: HTMLElement
  config?: ContextBoxConfig
}

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const onResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return size
}

export const ContextBox: FC<ContextBoxProps> = ({
  title,
  reducerId,
  items,
  domElement,
  config,
}) => {
  const contextBoxConfig = config ?? {
    location: { x: 0, y: 0 },
    size: { width: 300, height: 0 },
  }

  // @ts-ignore
  const state = useSelector((state) => state[reducerId])
  const location = useLocation()

  const defaultItems: ComplexItem[] = [
    { id: 'redux', label: `Reducer State - ${reducerId}`, data: state },
    { id: 'location', label: 'React Router - useLocation', data: location },
    ...items,
  ]

  const [expandedItems, setExpandedItems] = useState<string[]>(
    defaultItems.map((item) => item.id),
  )

  const [collapsed, setCollapsed] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState(contextBoxConfig.size)

  const windowSize = useWindowSize()

  useEffect(() => {
    setPosition((prev) => ({
      x: Math.max(windowSize.width - size.width - 8, 0),
      y: prev.y,
    }))
  }, [windowSize.width, size.width])

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max)

  const toggleItem = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    )
  }

  const toggleCollapsed = () => {
    setCollapsed((prev) => {
      return !prev
    })
  }

  return (
    <Portal container={domElement}>
      <Rnd
        style={{ zIndex: 20 }}
        size={{ width: size.width, height: size.height }}
        position={position}
        onDragStop={(e, d) =>
          setPosition({
            x: clamp(d.x, 0, windowSize.width - size.width),
            y: clamp(d.y, 0, windowSize.height - size.height),
          })
        }
        onResizeStop={(e, dir, ref) => {
          if (!collapsed) {
            setSize({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
            })
          }
        }}
        //$disableResizing={collapsed}
        dragHandleClassName="drag-handle"
        bounds="window"
      >
        <Panel>
          <Box $isCollapsed={collapsed}>
            <HeaderV2 className="drag-handle">
              <HeaderInner>
                <span>{title}</span>
              </HeaderInner>
              <CollapseButton
                onClick={(e) => {
                  e.stopPropagation()
                  toggleCollapsed()
                }}
              >
                {collapsed ? '▼' : '▶'}
              </CollapseButton>
            </HeaderV2>
            <Body>
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
            </Body>
          </Box>
        </Panel>
      </Rnd>
    </Portal>
  )
}
/*
<Box $isCollapsed={collapsed}>
          <Header className="drag-handle">
            <HeaderInner>
              <span>{title}</span>

              <CollapseButton
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCollapsed();
                }}
              >
                {collapsed ? "▼" : "▶"}
              </CollapseButton>
            </HeaderInner>
          </Header>

          {!collapsed && (
            <Content>
              {defaultItems.map((item) => (
                <ItemWrapper key={item.id}>
                  <ItemButton onClick={() => toggleItem(item.id)}>
                    {expandedItems.includes(item.id) ? "▼" : "▶"} {item.label}
                  </ItemButton>

                  {expandedItems.includes(item.id) && (
                    <div style={{ marginLeft: "1rem", marginTop: "0.25rem" }}>
                      <ObjectExplorer data={item.data} />
                    </div>
                  )}
                </ItemWrapper>
              ))}
            </Content>
          )}
        </Box>
 */
