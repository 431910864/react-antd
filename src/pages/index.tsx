import React, { Suspense } from "react";

export const SuspenseFallback = (props?: any) => <>{props.children || 'loading...'}</>;
export const TestLazy = React.lazy(() => import('./test'));
export const Test = React.forwardRef(({ ...rest }: any, ref?: any) =>
    <Suspense fallback={<SuspenseFallback />}><TestLazy {...rest} onRef={ref} /></Suspense>);