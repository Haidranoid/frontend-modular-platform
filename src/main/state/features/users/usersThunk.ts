import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  CreateUserPayload,
  DeleteUserPayload,
  GetUserPayload,
  UpdateUserPayload,
} from '@interfaces/users/payloads/usersPayloads.types'
import {
  CreateUserSuccess,
  DeleteUserSuccess,
  GetAllUsersSuccess,
  GetUserSuccess,
  UpdateUserSuccess,
} from '@interfaces/users/responses/usersResponses.types'
import { Endpoints } from '@constants'
import httpClient from '@experimental/http-client/httpClient'

export const getAllUsers = createAsyncThunk(
  'users/getAllUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.get<GetAllUsersSuccess>({
        endpoint: Endpoints.GET_USERS,
      })

      return data
    } catch (e: unknown) {
      rejectWithValue(e)
    }
  },
)

export const getSingleUser = createAsyncThunk<GetUserSuccess, GetUserPayload>(
  'users/getSingleUser',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.get<GetUserSuccess>({
        endpoint: Endpoints.GET_USER,
        endpointVariables: {
          userId: arg.id,
        },
      })
      return data
    } catch (e: unknown) {
      return rejectWithValue(e)
    }
  },
)

export const createUser = createAsyncThunk<CreateUserSuccess, CreateUserPayload>(
  'users/createUser',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.post<CreateUserPayload, CreateUserSuccess>({
        endpoint: Endpoints.CREATE_USER,
        body: arg,
      })

      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  },
)

export const updateUser = createAsyncThunk<UpdateUserSuccess, UpdateUserPayload>(
  'users/updateUser',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.patch<UpdateUserPayload, UpdateUserSuccess>({
        endpoint: Endpoints.UPDATE_USER,
        body: arg,
        endpointVariables: {
          userId: arg.id,
        },
      })

      return data
    } catch (e: unknown) {
      return rejectWithValue(e)
    }
  },
)

export const deleteUser = createAsyncThunk<DeleteUserSuccess, DeleteUserPayload>(
  'users/deleteUser',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.delete<DeleteUserSuccess>({
        endpoint: Endpoints.DELETE_USER,
        endpointVariables: {
          userId: arg.id,
        },
      })

      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  },
)
