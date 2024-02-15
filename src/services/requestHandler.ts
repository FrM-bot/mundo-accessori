type BaseRequest = (endpoint: string | URL | Request, params?: RequestInit | undefined) => Promise<Response>

type SuccessResponse<V> = {
  code: 'success'
  data: V
}

type ErrorResponse<E> = {
  code: 'error'
  error: E
}

type BaseResponse<V, E> = Promise<SuccessResponse<V> | ErrorResponse<E>>

export const RequestHandler = <R, E>(request: BaseRequest) => async (endpoint: string | URL | Request, params?: RequestInit | undefined): BaseResponse<R, E> => {
  try {
    const response = await request(endpoint, params)
    const data: R = await response.json()
    return {
      code: 'success',
      data
    }
  } catch (err) {
    return {
      code: 'error',
      error: err as E
    }
  }
}
