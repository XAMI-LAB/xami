import AppException from "./AppException";

export default class HttpException extends AppException {
    statusCode: string | number;

    constructor(statucCode: number | string, message: string, detail?: string) {
        super(message, detail);
        this.statusCode = statucCode;
    }
}