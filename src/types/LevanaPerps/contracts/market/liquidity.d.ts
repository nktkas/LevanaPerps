// 0.1.0-beta.15
//
// Data types for tracking liquidity

import type { Collateral, LpToken } from "../../prelude.d.ts";

// ———————————————Structs———————————————

/** Protocol wide stats on liquidity */
export interface LiquidityStats {
	/** Collateral locked as counter collateral in the protocol */
	locked: Collateral;
	/** Total amount of collateral available to be used as liquidity */
	unlocked: Collateral;
	/** Total number of LP tokens */
	total_lp: LpToken;
	/** Total number of xLP tokens */
	total_xlp: LpToken;
}
