type SuccessResponse<T> = {
	success: true
	data: T
}

type ErrorResponse = {
	success: false
	error: string
}

// Function overloads
export function jsonRes<T>(params: { data: T }): SuccessResponse<T>
export function jsonRes(params: { error: string }): ErrorResponse
export function jsonRes<T>(params: {
	data?: T
	error?: string
}): SuccessResponse<T> | ErrorResponse {
	if (params.error) {
		return {
			success: false,
			error: params.error,
		}
	}
	return {
		success: true,
		data: params.data as T,
	}
}
