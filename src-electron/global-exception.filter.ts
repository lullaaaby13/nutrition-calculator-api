import {ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger} from '@nestjs/common';

@Catch()
export default class GlobalExceptionFilter implements ExceptionFilter{

    private readonly logger = new Logger(GlobalExceptionFilter.name);

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        const message = (exception as any).message.message;

        // @ts-ignore
        switch(exception.constructor) {
            case HttpException:	// for HttpException
                status = (exception as HttpException).getStatus();
                break;
            default: // default
                status = HttpStatus.INTERNAL_SERVER_ERROR
        }

        //console.dir(exception);
        this.logger.error(exception.message, exception.stack);


        // @ts-ignore
        response.status(status)
            .json({
                statusCode: status,
                message: (exception as any).message,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}
