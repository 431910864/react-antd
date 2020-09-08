import React, { forwardRef } from 'react';
import styled from '@emotion/styled'
import {
    compose,
    space,
    layout,
    typography,
    color,
    flexbox,
} from 'styled-system'
import css, { get } from '@styled-system/css'
import shouldForwardProp, { createShouldForwardProp } from '@styled-system/should-forward-prop'
import { system } from '@styled-system/core';
import { BoxProps } from './type'
// import colorStore from '@stores/color'
// import { themeName } from '@stores/color/types';

// 自定义
const cursor = system({
    cursor: true,
    position: true,
    left: true,
    right: true,
    bottom: true,
    top: true,
    border: true,
    borderRadius: true,
    boxShadow: true,
    background: true,
    margin: true,
    borderRight: true,
    borderBottom: true,
    borderTop: true,
    borderLeft: true,
    transform: true,
    backgroundImage: true,
    backgroundPosition: true,
    backgroundSize: true,
    backgroundRepeat: true,
    wordBreak: true,
    textOverflow: true,
    boxOrient: true,
    lineClamp: true,
    whiteSpace: true,
    float: true,
    verticalAlign: true,
    textAnchor: true,
    dominantBaseline: true,
    fill: true,
    stroke: true,
    strokeWidth: true,
    zIndex: true,
})

// const attr = {
//     fill: true,
// }

const themeColor = '#6A3FB3'

const hoverName = '&:hover';

// // 横杠转换驼峰
// function humpClassName(name?: any) {
//     return name.replace(/\_(\w)/g, function(all?: any, letter?: any){
//         return letter.toUpperCase();
//     });
// }
// 驼峰转换横杠
function lineClassName(name?: any) {
    return name.replace(/([A-Z])/g,"-$1").toLowerCase();
}

export const prefixClassName = lineClassName('re-flexbox-');

// 是否是数字
const isNumber = (value?: any) => typeof value === 'number';
// 是否是bool
const isBoolean = (value?: any) => typeof value === 'boolean';
// 是否是对象
const isObject = (value?: any) => typeof value === 'object';
// 对象长度是否大于1
const isObjectKeys = (value?: any) => value && isObject(value) && Object.keys(value || {}).length > 0;
// 数组长度是否大于1
const isArrayKeys = (array?: any) => array && isObject(array) && array.length > 0;
// 取第一个数组对象
const head = (array?: any) => {
    return isArrayKeys(array) ? array[0] : undefined
};
// 取最后一个数组对象
const last = (array?: any) => {
    if (!isArrayKeys(array)) return undefined;
    const length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
};
const reduceClassName = (prefixClassName?: any, className?: any, parentName?: any) => {
    if (!className) return {};
    return Object.entries(className).reduce((current?: any, classNameItem?: any) => {
        const headItem = head(classNameItem);
        const lastItem = last(classNameItem);
        const headClassName = lineClassName(headItem);
        if (isObjectKeys(lastItem)) {
            current = [
                ...current,
                ...reduceClassName(prefixClassName, lastItem, headItem)
            ]
        } else {
            if (isNumber(lastItem) || (isBoolean(lastItem) && lastItem)) {
                current.push(`${prefixClassName}${headClassName}${(!isBoolean(lastItem) && ('-' + lastItem)) || ''}`);
            }
        }
        return current;
    }, [])
}

const getClassName = (props?: any, name?: any, css?: any) => {
    const themeProps: any = undefined;//props[colorStore.themeName] || {};
    const classNameThemeProps = themeProps && themeProps.className;
    const styleThemeProps = themeProps && themeProps.style;
    const propsClassName = `${props.className || props.class || ''}`
    const styleProps = props.style;
    const hoverStyle = props.hoverStyle;
    const className = [propsClassName, classNameThemeProps].filter((item) => item);
    const __css = {
        ...css,
        ...styleProps,
        ...styleThemeProps,
        [hoverName]: hoverStyle,
    }
    if (!name) return {
        className: className.join(' '),
        __css,
    };
    const {
        fade,
        fadeInverse,
        fadeBackgroundColor,
        fadeTextColor,
        fadeTextColorInverse,
        primary,
        primaryBackgroundColor,
        primaryTextColor,
        primaryBackgroundColorDesaturate,
        primaryBackgroundColorSaturate,
        fadeCard,
    } = props;
    const classNameList = reduceClassName(prefixClassName,{
        fade,
        fadeCard,
        fadeInverse,
        fadeBackgroundColor,
        fadeTextColor,
        fadeTextColorInverse,
        primary,
        primaryBackgroundColor,
        primaryTextColor,
        primaryBackgroundColorDesaturate,
        primaryBackgroundColorSaturate,
    })
    const flexboxClassName = `re-flexbox-${name}`;
    return {
        className: [
            flexboxClassName,
            ...classNameList,
            ...className,
        ].filter((item) => item).join(' '),
        __css,
    }
}

const type: any = {
    'primary': {
        backgroundColor: themeColor,
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    'link': {
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, .85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    'border': {
        backgroundColor: 'transparent',
        color: themeColor,
        border: `1px solid ${themeColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
const sx = (props?: any) => css(props.sx)(props.theme)
const base = (props?: any) => css(props.__css)(props.theme)
const variant = ({
                     theme,
                     variant,
                     tx = 'variants',
                 }: any) =>
    css(
        get(theme, tx + '.' + variant,
            get(theme, variant)
        )
    )(theme)

export const ReBox: any = styled('div', {
    shouldForwardProp: (props: any) => {
        const propsNames: any = compose(cursor).propNames;
        return shouldForwardProp(props) && createShouldForwardProp(propsNames)(props);
    },
})({
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0,
    },
    base,
    variant,
    sx,
    (props?: any) => props.css,
    compose(
        space,
        layout,
        typography,
        color,
        flexbox,
        cursor,
    ),
)

export const ReSpan: any = styled('span', {
    shouldForwardProp: (props) => {
        const propsNames: any = compose(cursor).propNames;
        return shouldForwardProp(props) && createShouldForwardProp(propsNames)(props);
    },
})({
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0,
    },
    base,
    variant,
    sx,
    (props?: any) => props.css,
    compose(
        space,
        layout,
        typography,
        color,
        flexbox,
        cursor,
    ),
)

// export const Flex = styled(Box)({
//   display: 'flex'
// })

export const Span = forwardRef((props?: BoxProps, ref?: any) =>
    <ReSpan
        ref={ref}
        {...props}
        {...getClassName(props, 'span', {})}
    />
)

export const Box = forwardRef((props?: BoxProps, ref?: any) =>
    <ReBox
        ref={ref}
        {...props}
        {...getClassName(props, 'box', {})}
    />
)

export const Flex = forwardRef((props?: BoxProps, ref?: any) =>
    <ReBox
        ref={ref}
        {...props}
        {...getClassName(props, 'flex', {
            display: 'flex'
        })}
    />
)

export const Image = forwardRef((props: any, ref: any) =>
    <ReBox
        ref={ref}
        as='img'
        alt='SixPencer'
        {...props}
        {...getClassName(props, 'image', {
            maxWidth: '100%',
            height: 'auto',
        })}
    />
)

export const BorderImage = forwardRef((props?: BoxProps, ref?: any) =>
    <ReBox
        ref={ref}
        as='img'
        alt='SixPencer'
        {...props}
        {...getClassName(props, 'border-image', {
            maxWidth: '100%',
            borderRadius: '100%',
            overflow: 'hidden',
            verticalAlign: 'baseline',
            maxHeight: '100%',
            height: '100%',
            width: '100%'
        })}
    />
)

export const Card = forwardRef((props?: BoxProps, ref?: any) =>
    <ReBox
        ref={ref}
        variant='card'
        {...props}
        {...getClassName(props, 'card', {
            background: 'rgba(255,255,255,1)',
            boxShadow: '3px 6px 23px -4px rgba(80,81,122,0.12)',
            borderRadius: '5px',
            border: '1px solid rgba(228,228,228,1)',
            padding: '10px 15px',
            marginBottom: 10,
        })}
    />
)

export const Button = forwardRef((props?: BoxProps, ref?: any) =>
    <ReBox
        ref={ref}
        // as='button'
        // tx='buttons'
        variant='primary'
        {...props}
        {...getClassName(props, 'button', {
            appearance: 'none',
            display: 'inline-block',
            textAlign: 'center',
            lineHeight: 'inherit',
            textDecoration: 'none',
            fontSize: 'inherit',
            px: 3,
            py: 2,
            border: 0,
            borderRadius: 4,
            cursor: 'pointer',
            ...type[props?.type || 'link'],
        })}
    />
)

export const Text = forwardRef((props?: BoxProps, ref?: any) =>
    <ReSpan
        ref={ref}
        tx='text'
        {...props}
        {...getClassName(props, 'text', {
            display: 'inline-block',
            // fontSize: 12,
        })}
    />
)

export const ThemeText = forwardRef((props?: BoxProps, ref?: any) =>
    <ReSpan
        ref={ref}
        tx='text'
        {...props}
        {...getClassName(props, 'theme-text', {
            display: 'inline-block',
            color: themeColor
            // fontSize: 12,
        })}
    />
)

export const Link = forwardRef((props?: BoxProps, ref?: any) =>
    <ReSpan
        ref={ref}
        as='a'
        {...props}
        {...getClassName(props, 'link', {
            display: 'inline-block',
            // fontSize: 12,
        })}
    />
)

export const Svg = forwardRef((props?: BoxProps, ref?: any) =>
    <ReSpan
        ref={ref}
        as='svg'
        {...props}
        {...getClassName(props, 'svg', {

        })}
    />
)

export const Section = forwardRef((props?: BoxProps, ref?: any) =>
    <ReBox
        ref={ref}
        as='section'
        {...props}
        {...getClassName(props, 'section', {
            display: 'flex'
        })}
    />
)