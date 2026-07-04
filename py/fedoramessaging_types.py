# Typed models for the FedoraMessaging SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Search:
    category: Optional[str] = None
    i: Optional[int] = None
    msg: Optional[dict] = None
    msg_id: Optional[str] = None
    timestamp: Optional[float] = None
    topic: Optional[str] = None
    username: Optional[str] = None


@dataclass
class SearchListMatch:
    category: Optional[str] = None
    i: Optional[int] = None
    msg: Optional[dict] = None
    msg_id: Optional[str] = None
    timestamp: Optional[float] = None
    topic: Optional[str] = None
    username: Optional[str] = None

