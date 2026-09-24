"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FedoraMessagingError = void 0;
class FedoraMessagingError extends Error {
    isFedoraMessagingError = true;
    sdk = 'FedoraMessaging';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FedoraMessagingError = FedoraMessagingError;
//# sourceMappingURL=FedoraMessagingError.js.map