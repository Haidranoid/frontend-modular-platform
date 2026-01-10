import { FC } from 'react'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Portal.stories'

const { Default } = composeStories(stories)

describe('Portal', () => {
  it('renders correctly', () => {
    const Component: FC = () => <div>test container</div>

    render(
      <Default>
        <Component />
      </Default>,
    )

    //eslint-disable-next-line testing-library/no-node-access
    const children = document.body.querySelectorAll(':scope > div')

    //console.log('Divs directos bajo body:', children.length);
    //screen.debug()

    expect(children.length).toBe(2)
  })
})

/**
 const body = screen.getByRole('document'); // body no tiene rol directo, ver más abajo
 const divs = within(document.body).getAllByRole('generic');
 */
