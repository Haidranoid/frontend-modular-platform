import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import { Content, ItemWrapper, ItemButton, Box, Header } from './DraggableBox.styled'
import { ObjectExplorer } from './object-explorer'
import { FloatingBox } from '../floating-box'

type ComplexItem = {
  id: string
  label: string
  data: Record<string, any> // puede ser cualquier objeto (ej: redux state, location, etc.)
}

type DraggableBoxProps = {
  title: string
  items: ComplexItem[]
}

export function DraggableBox({ title, items }: DraggableBoxProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    )
  }

  return (
    <FloatingBox>
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 300,
          height: 300,
        }}
        bounds="window"
        dragHandleClassName="drag-handle"
      >
        <Box>
          <Header className="drag-handle">{title}</Header>
          <Content>
            {items.map((item) => (
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
        </Box>
      </Rnd>
    </FloatingBox>
  )
}
