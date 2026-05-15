<?php
declare(strict_types=1);

// FedoraMessaging SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FedoraMessagingFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FedoraMessagingBaseFeature();
            case "test":
                return new FedoraMessagingTestFeature();
            default:
                return new FedoraMessagingBaseFeature();
        }
    }
}
