class ApiResponse {
   constructor(statusCode, resData, message="Success in Api Response"){
    (this.statusCode = statusCode),
    (this.resData = resData),
    (this.message = message),
    (this.success = statusCode < 400);
   }
}