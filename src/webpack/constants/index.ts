import path from 'path'

export const ROOT_DIR = path.join(__dirname, '..', '..', '..')

export const IS_DEV = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

export const NODE_ENV = process.env.NODE_ENV
