"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/** Returns false on server and during hydration; true after client mount. */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
