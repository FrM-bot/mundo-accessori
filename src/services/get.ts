import { RequestHandler } from './requestHandler'

type DataResponse = {
  id: string
  status: number
  joke: string
}

export const getRepositories = RequestHandler<DataResponse, any>((endpoint, params) => fetch(endpoint, params))

export const getJoke = RequestHandler<DataResponse, any>((endpoint, params) => fetch(endpoint, params))
