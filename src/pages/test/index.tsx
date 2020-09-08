import React from "react";
import hoistNonReactStatics from 'hoist-non-react-statics';
import { FlexBox } from "../../components";

export const withRoute = (Component?: any, rest?: any) => {
    const Route = (props?: any) => <Component {...props} {...rest} />
    hoistNonReactStatics(Route, Component, {
        // myStatic: true,
        // myOtherStatic: true
    })
    return Route;
}

export default withRoute(function (props?: any) {
    return <FlexBox.Flex onClick={() => {
        // console.info(props.onRef.current)
    }} ref={props.onRef}>
        123
    </FlexBox.Flex>
}, {})