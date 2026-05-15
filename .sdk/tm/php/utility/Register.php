<?php
declare(strict_types=1);

// FedoraMessaging SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FedoraMessagingUtility::setRegistrar(function (FedoraMessagingUtility $u): void {
    $u->clean = [FedoraMessagingClean::class, 'call'];
    $u->done = [FedoraMessagingDone::class, 'call'];
    $u->make_error = [FedoraMessagingMakeError::class, 'call'];
    $u->feature_add = [FedoraMessagingFeatureAdd::class, 'call'];
    $u->feature_hook = [FedoraMessagingFeatureHook::class, 'call'];
    $u->feature_init = [FedoraMessagingFeatureInit::class, 'call'];
    $u->fetcher = [FedoraMessagingFetcher::class, 'call'];
    $u->make_fetch_def = [FedoraMessagingMakeFetchDef::class, 'call'];
    $u->make_context = [FedoraMessagingMakeContext::class, 'call'];
    $u->make_options = [FedoraMessagingMakeOptions::class, 'call'];
    $u->make_request = [FedoraMessagingMakeRequest::class, 'call'];
    $u->make_response = [FedoraMessagingMakeResponse::class, 'call'];
    $u->make_result = [FedoraMessagingMakeResult::class, 'call'];
    $u->make_point = [FedoraMessagingMakePoint::class, 'call'];
    $u->make_spec = [FedoraMessagingMakeSpec::class, 'call'];
    $u->make_url = [FedoraMessagingMakeUrl::class, 'call'];
    $u->param = [FedoraMessagingParam::class, 'call'];
    $u->prepare_auth = [FedoraMessagingPrepareAuth::class, 'call'];
    $u->prepare_body = [FedoraMessagingPrepareBody::class, 'call'];
    $u->prepare_headers = [FedoraMessagingPrepareHeaders::class, 'call'];
    $u->prepare_method = [FedoraMessagingPrepareMethod::class, 'call'];
    $u->prepare_params = [FedoraMessagingPrepareParams::class, 'call'];
    $u->prepare_path = [FedoraMessagingPreparePath::class, 'call'];
    $u->prepare_query = [FedoraMessagingPrepareQuery::class, 'call'];
    $u->result_basic = [FedoraMessagingResultBasic::class, 'call'];
    $u->result_body = [FedoraMessagingResultBody::class, 'call'];
    $u->result_headers = [FedoraMessagingResultHeaders::class, 'call'];
    $u->transform_request = [FedoraMessagingTransformRequest::class, 'call'];
    $u->transform_response = [FedoraMessagingTransformResponse::class, 'call'];
});
