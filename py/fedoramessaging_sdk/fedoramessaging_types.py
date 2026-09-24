# Typed models for the FedoraMessaging SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Search(TypedDict, total=False):
    category: str
    i: int
    msg: dict
    msg_id: str
    timestamp: float
    topic: str
    username: str


class SearchListMatch(TypedDict, total=False):
    agent: list
    category: list
    delta: float
    end: Any
    not_agent: list
    not_category: list
    not_package: list
    not_topic: list
    not_user: list
    order: str
    package: list
    page: int
    rows_per_page: int
    start: Any
    topic: list
    user: list
