import { Context } from './Context';
declare class FedoraMessagingError extends Error {
    isFedoraMessagingError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FedoraMessagingError };
