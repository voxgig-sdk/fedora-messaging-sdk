<?php
declare(strict_types=1);

// FedoraMessaging SDK utility: prepare_body

class FedoraMessagingPrepareBody
{
    public static function call(FedoraMessagingContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
