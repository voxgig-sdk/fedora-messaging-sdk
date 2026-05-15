<?php
declare(strict_types=1);

// FedoraMessaging SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FedoraMessagingMakeContext
{
    public static function call(array $ctxmap, ?FedoraMessagingContext $basectx): FedoraMessagingContext
    {
        return new FedoraMessagingContext($ctxmap, $basectx);
    }
}
