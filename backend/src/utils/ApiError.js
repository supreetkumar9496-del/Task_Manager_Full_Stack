class ApiError extends Error{
    constructor(statusCode, resData, message="Something went wrong", error = [], stack = ''){
        this.statusCode = statusCode,
        this.message = message,
        this.resData = null,
        this.error = error

        if(stack){
            this.stack = stack

        }else{
            Error.captureStackTrace(this, this.stack);
        }


    }
}
export {ApiError};
// stack trace error