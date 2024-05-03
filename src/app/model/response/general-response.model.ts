

export interface GeneralResponse<T>{
    value:T,
    status:number,
    isSuccess:boolean,
    successMessage:string,
    correlationId:string,
    errors:string[],
    validationErrors:string[]
}