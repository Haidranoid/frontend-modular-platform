import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { getUsers } from './getUsers'
import App from './App'
import userEvent from '@testing-library/user-event'

jest.mock('./getUsers')
const mockGetUser = mocked(getUsers, true)

describe('when everything is OK', () => {
  beforeEach(async () => {
    render(<App />)
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled())
  })

  //--------------------------- getBy ---------------------------
  test('should render the App component without crashing', () => {
    render(<App />)
    //screen.debug();
  })

  test('should select the children that is being passes to the CustomInput component', () => {
    screen.getAllByText(/input/)
    //screen.getByText(/input/)
    //screen.getByText('input:')
    //expect(screen.getByText('input:')).toBeInTheDocument();
  })

  test('should select the input element by its role', () => {
    screen.getAllByRole('textbox')
    expect(screen.getAllByRole('textbox').length).toEqual(1)
  })

  test('should select a label element by its text', () => {
    screen.getAllByLabelText('input:')
  })

  test('should select a label element by its placeholder', () => {
    screen.getAllByPlaceholderText('insert')
  })

  test('should select a input by its id', () => {
    screen.getByTestId('search')
  })

  //--------------------------- queryBy ---------------------------
  test('should select the input element by its role with queryByRole', () => {
    expect(screen.getAllByRole('textbox')[0]).toBeInTheDocument()
  })

  test('should not find the role "whatever" in our component', () => {
    expect(screen.queryByRole('whatever')).not.toBeInTheDocument()
  })
})

describe('when the component fetches the user successfully', () => {
  beforeEach(() => {
    mockGetUser.mockClear()
  })

  test('should call getUser once', async () => {
    render(<App />)
    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(1))
  })

  //--------------------------- findBy ---------------------------
  test('should render the username passed', async () => {
    mockGetUser.mockImplementationOnce(() =>
      Promise.resolve({
        id: '1',
        name: 'john',
      }),
    )
    render(<App />)
    expect(screen.queryByText(/username/)).not.toBeInTheDocument()
    expect(await screen.findByText(/username/)).toBeInTheDocument()
  })
})

describe('when the user enters some text in the input element', () => {
  test('should display the text in the screen', async () => {
    render(<App />)
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled())

    expect(screen.getByText(/You typed: .../))

    /*fireEvent.change(screen.getByRole('textbox'), {
            target: {
                value: 'David'
            }
        })*/

    await userEvent.type(screen.getByRole('textbox'), 'David')

    expect(screen.getByText(/You typed: David/))
  })
})

/*
import React from 'react'
import { render, screen } from '@testing-library/react'
import Pokemon from './Pokemon'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('when the users enters a valid pokemon name', () => {
  test('should show the pokemon abilities of that pokemon', async () => {
    const abilities = [
      {
        ability: {
          name: 'Test ability 1',
          url: 'https://ability.com/ability1',
        },
      },
      {
        ability: {
          name: 'Test ability 2',
          url: 'https://ability.com/ability2',
        },
      },
    ]

    mockedAxios.get.mockResolvedValueOnce({ data: { abilities } })
    render(<Pokemon />)

    await userEvent.type(screen.getByRole('textbox'), 'ditto')
    await userEvent.click(screen.getByRole('button'))

    const returnedAbilities = await screen.findAllByRole('listitem')
    expect(returnedAbilities).toHaveLength(2)
  })
})

describe('when the users enters a invalid pokemon name', () => {
  test('should show the an error in the screen', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error())
    render(<Pokemon />)

    await userEvent.type(screen.getByRole('textbox'), 'invalid-pokemon-name')
    await userEvent.click(screen.getByRole('button'))

    const message = await screen.findByText(/something went wrong/)
    expect(message).toBeInTheDocument()
  })
})


 */
