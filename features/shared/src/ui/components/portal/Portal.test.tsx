import { FC } from 'react'
import { renderEnhanced } from '#testing-utils'
import { Portal } from './Portal'

const Component: FC = () => <div>children in portal</div>

describe('Portal', () => {
  it('renders correctly', () => {
    renderEnhanced(<Portal children={<Component />} container={document.body} />)
    const children = document.body.querySelectorAll('div')
    expect(children.length).toBeGreaterThan(0)
  })
})
