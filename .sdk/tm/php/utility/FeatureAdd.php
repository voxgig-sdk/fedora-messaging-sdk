<?php
declare(strict_types=1);

// FedoraMessaging SDK utility: feature_add

class FedoraMessagingFeatureAdd
{
    public static function call(FedoraMessagingContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
