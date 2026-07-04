<?php
declare(strict_types=1);

// Typed models for the FedoraMessaging SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Search entity data model. */
class Search
{
    public ?string $category = null;
    public ?int $i = null;
    public ?array $msg = null;
    public ?string $msg_id = null;
    public ?float $timestamp = null;
    public ?string $topic = null;
    public ?string $username = null;
}

/** Match filter for Search#list (any subset of Search fields). */
class SearchListMatch
{
    public ?string $category = null;
    public ?int $i = null;
    public ?array $msg = null;
    public ?string $msg_id = null;
    public ?float $timestamp = null;
    public ?string $topic = null;
    public ?string $username = null;
}

