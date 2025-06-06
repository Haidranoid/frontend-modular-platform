import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetMeSuccess } from '@interfaces/auth/responses/authResponses.types'
import httpClient from '@lib/http-client/httpClient'
import {
  CreateUserPayload,
  DeleteUserPayload,
  GetUserPayload,
  UpdateUserPayload,
} from '@interfaces/users/payloads/usersPayloads.types'
import { Endpoints, HttpMethods } from '@constants'
import {
  CreateUserSuccess,
  DeleteUserSuccess,
  GetAllUsersSuccess,
  GetUserSuccess,
  UpdateUserSuccess,
} from '@interfaces/users/responses/usersResponses.types'

export const getAllUsers = createAsyncThunk<GetAllUsersSuccess>(
  'users/getAllUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await httpClient<GetAllUsersSuccess>({
        endpoint: Endpoints.GET_USERS,
        method: HttpMethods.GET,
      })
      return data
    } catch (e) {
      rejectWithValue(e)
    }
  },
)

export const getSingleUser = createAsyncThunk<GetUserSuccess, GetUserPayload>(
  'users/getSingleUser',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await httpClient<GetUserSuccess, GetUserPayload>({
        endpoint: Endpoints.GET_USER,
        method: HttpMethods.GET,
        endpointVariables: {
          userId: arg.id,
        },
      })

      return data
    } catch (e) {
      rejectWithValue(e)
    }
  },
)

export const createUser = createAsyncThunk<CreateUserSuccess, CreateUserPayload>(
  'users/createUser',
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await httpClient<CreateUserSuccess, CreateUserPayload>({
        endpoint: Endpoints.CREATE_USER,
        method: HttpMethods.POST,
        body: args,
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
      const { data } = await httpClient<UpdateUserSuccess, UpdateUserPayload>({
        endpoint: Endpoints.UPDATE_USER,
        method: HttpMethods.PATCH,
        body: arg,
        endpointVariables: {
          userId: arg.id,
        },
      })
      return data
    } catch (e) {
      rejectWithValue(e)
    }
  },
)

export const deleteUser = createAsyncThunk<DeleteUserSuccess, DeleteUserPayload>(
  'users/deleteUser',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await httpClient<DeleteUserPayload>({
        endpoint: Endpoints.DELETE_USER,
        method: HttpMethods.DELETE,
        endpointVariables: {
          userId: arg.id,
        },
      })
      return data
    } catch (e) {
      rejectWithValue(e)
    }
  },
)
