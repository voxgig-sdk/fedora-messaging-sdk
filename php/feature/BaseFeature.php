<?php
declare(strict_types=1);

// FedoraMessaging SDK base feature

class FedoraMessagingBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FedoraMessagingContext $ctx, array $options): void {}
    public function PostConstruct(FedoraMessagingContext $ctx): void {}
    public function PostConstructEntity(FedoraMessagingContext $ctx): void {}
    public function SetData(FedoraMessagingContext $ctx): void {}
    public function GetData(FedoraMessagingContext $ctx): void {}
    public function GetMatch(FedoraMessagingContext $ctx): void {}
    public function SetMatch(FedoraMessagingContext $ctx): void {}
    public function PrePoint(FedoraMessagingContext $ctx): void {}
    public function PreSpec(FedoraMessagingContext $ctx): void {}
    public function PreRequest(FedoraMessagingContext $ctx): void {}
    public function PreResponse(FedoraMessagingContext $ctx): void {}
    public function PreResult(FedoraMessagingContext $ctx): void {}
    public function PreDone(FedoraMessagingContext $ctx): void {}
    public function PreUnexpected(FedoraMessagingContext $ctx): void {}
}
