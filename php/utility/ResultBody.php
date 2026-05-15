<?php
declare(strict_types=1);

// FedoraMessaging SDK utility: result_body

class FedoraMessagingResultBody
{
    public static function call(FedoraMessagingContext $ctx): ?FedoraMessagingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
