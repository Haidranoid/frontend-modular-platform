import type { Draft, PayloadAction } from "@reduxjs/toolkit";
import type { Api } from "./api.types";
import type { BaseState } from "./common.types";

export type OnFulfilledMap<TState, TApi extends Api> = {
    [K in keyof TApi]?: (
        state: Draft<TState & BaseState>,
        action: PayloadAction<Awaited<ReturnType<TApi[K]>>>,
    ) => void
}
