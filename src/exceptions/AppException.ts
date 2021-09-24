export default class AppException extends Error {
    message: string;
    detail: string | undefined;
    constructor(message: string, detail?: string) {
        super(message);
        this.message = message;
        this.detail = detail;
    }
}
