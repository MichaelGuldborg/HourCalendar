export enum RequestMethod {
    'GET',
    'POST',
    'PUT',
    'DELETE',
}


export interface RequestErrorResponse {
    success: false;
    statusCode: number;
    errorCode: string;
    severity: string;
    message: string;
}
