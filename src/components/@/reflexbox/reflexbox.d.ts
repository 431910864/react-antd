// import {BorderStyle, Color, Overflow} from "@components/@/reflexbox/type";

declare module "../@/reflexbox" {
    import * as React from "react";

    export type Color = string | number;

    export type BorderStyle = 'solid' | 'dotted' | 'dashed';

    export type Overflow = 'visible' | 'hidden' | 'scroll';

    export interface ReactAttr<T = HTMLElement> extends React.HTMLAttributes<T> { }

    export interface ReflexProviderProps {
        space: number[];
        breakpoints: number[];
    }
    export type fade = true | 0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100;
    export type primary = true | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    export type themeProps = {
        className?: any,
        style?: BoxProps,
    }
    export interface BoxProps {
        w?: number | string | number[] | string[];
        h?: number | string | number[] | string[];
        // flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit",
        // flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit",
        // alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline",
        // justifyContent?:
        //     | "flex-start"
        //     | "flex-end"
        //     | "center"
        //     | "space-between"
        //     | "space-around"
        //     | "space-evenly",
        style?: React.CSSProperties;
        className?: ReactAttr['className'] | string | any;
        flex?: number | string;
        wrap?: boolean;
        column?: boolean;
        auto?: boolean;
        order?: number;
        align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
        justify?:
            | "flex-start"
            | "flex-end"
            | "center"
            | "space-between"
            | "space-around"
            | "space-evenly";

        m?: number | string;
        mx?: number | string;
        my?: number | string;
        mt?: number | string;
        mb?: number | string;
        ml?: number | string;
        mr?: number | string;

        p?: number | string;
        px?: number | string;
        py?: number | string;
        pt?: number | string;
        pb?: number | string;
        pl?: number | string;
        pr?: number | string;


        padding?: number | string;
        paddingVertical?: number | string;
        paddingHorizontal?: number | string;
        paddingTop?: number | string;
        paddingBottom?: number | string;
        paddingLeft?: number | string;
        paddingRight?: number | string;

        width?: number | string;
        height?: number | string;
        top?: number | string;
        left?: number | string;
        right?: number | string;
        bottom?: number | string;
        position?: 'absolute' | 'relative' | 'sticky' | 'fixed';

        fontSize?: number | string,
        fontFamily?: string;
        fontStyle?: 'normal' | 'italic';
        fontWeight?: string | number;
        textDecoration?: string;
        textShadowOpacity?: number | string;
        textShadowSpread?: number | string;
        textShadowOffset?: { width: number | string; height: number | string };
        textShadowRadius?: number | string;
        textShadowColor?: Color;
        textTransform?: 'uppercase' | 'lowercase';
        letterSpacing?: number | string;
        lineHeight?: number | string;
        textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
        paragraphSpacing?: number | string;
        writingDirection?: 'auto' | 'ltr' | 'rtl';
        color?: Color;

        shadowColor?: Color;
        shadowInner?: boolean;
        shadowSpread?: number | string;
        shadowOffset?: { width: number | string; height: number | string };
        shadowOpacity?: number | string;
        shadowRadius?: number | string;

        minWidth?: number | string;
        maxWidth?: number | string;
        minHeight?: number | string;
        maxHeight?: number | string;

        margin?: number | string;
        marginVertical?: number | string;
        marginHorizontal?: number | string;
        marginTop?: number | string;
        marginBottom?: number | string;
        marginLeft?: number | string;
        marginRight?: number | string;

        flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
        flexWrap?: 'wrap' | 'nowrap';
        justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
        alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
        alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';

        overflow?: Overflow;
        overflowX?: Overflow;
        overflowY?: Overflow;
        aspectRatio?: number | string;
        zIndex?: number | string;
        backfaceVisibility?: 'visible' | 'hidden';
        backgroundColor?: Color;
        borderColor?: Color;
        borderTopColor?: Color;
        borderRightColor?: Color;
        borderBottomColor?: Color;
        borderLeftColor?: Color;
        borderRadius?: number | string;
        borderTopLeftRadius?: number | string;
        borderTopRightRadius?: number | string;
        borderBottomLeftRadius?: number | string;
        borderBottomRightRadius?: number | string;
        borderStyle?: BorderStyle;
        borderTopStyle?: BorderStyle;
        borderRightStyle?: BorderStyle;
        borderBottomStyle?: BorderStyle;
        borderLeftStyle?: BorderStyle;
        borderWidth?: number | string;
        borderTopWidth?: number | string;
        borderRightWidth?: number | string;
        borderBottomWidth?: number | string;
        borderLeftWidth?: number | string;
        opacity?: number | string;
        transform?: string;
        transformOrigin?: string;

        onClick?: () => void;

        cursor?: 'pointer' | string;

        direction?: 'ltr' | 'rtl';

        src?: string | number,

        onPress?: () => void;

        onChange?: () => void;

        boxShadow?: string;

        background?: string;


        border?: string;
        borderBottom?: string;
        borderTop?: string;
        borderLeft?: string;
        borderRight?: string;


        backgroundImage?: string;
        backgroundPosition?: string;
        backgroundSize?: string;
        backgroundRepeat?: string;

        textOverflow?: string;
        boxOrient?: string;
        lineClamp?: number | string;
        whiteSpace?: string;

        type?: 'link' | 'primary' | 'border';
        id?: string;

        wordBreak?: 'break-word' | 'inherit' | 'keep-all' | 'normal' | 'initial' | 'unset' | 'break-all' | string;

        display?: 'flex' | 'block' | 'contents' | 'flow-root' | 'grid' | 'inherit' | 'initial' | 'inline' | 'inline-flex' | 'inline-grid' | 'inline-table' | 'inline-block' | 'inline-box' | '-webkit-inline-box' | 'list-item' | 'none' | 'table' | 'table-caption' | 'table-cell' | 'table-column' | 'table-column-group' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group' | 'unset' | '-webkit-box';
        children?: React.ReactNode | React.Component<BoxProps> | any;
        value?: any,

        href?: any,

        float?: 'left' | 'right',
        verticalAlign?: 'baseline' | 'bottom' | 'inherit' | 'initial' | 'middle' | 'sub' | 'super' | 'text-bottom' | 'text-top' | 'top' | 'unset' | '-webkit-baseline-middle';
        textAnchor?: 'end' | 'inherit' | 'initial' | 'middle' | 'start' | 'unset';
        dominantBaseline?: 'middle' | 'alphabetic' | 'auto' | 'central' | 'hanging' | 'ideographic' | 'inherit' | 'initial' | 'mathematical' | 'no-change' | 'reset-size' | 'text-after-edge' | 'text-before-edge' | 'unset' | 'use-script';
        fill?: string | any;
        stroke?: string | any;
        strokeWidth?: number | string | any;
        role?: any;
        fade?: fade;
        fadeInverse?: fade;
        fadeBackgroundColor?: fade;
        fadeTextColor?: fade;
        fadeTextColorInverse?: fade;
        primary?: primary;
        primaryBackgroundColor?: primary;
        primaryBackgroundColorDesaturate?: primary;
        primaryBackgroundColorSaturate?: primary;
        primaryTextColor?: primary;
        dark?: themeProps;
        light?: themeProps;
        fadeCard?: boolean;
        hoverStyle?: any;
    }

    export class ReflexProvider extends React.Component<ReflexProviderProps> {}
    export class Flex extends React.Component<BoxProps> {}
    export class Box extends React.Component<BoxProps> {}
    export class Image extends React.Component<BoxProps> {}
    export class BorderImage extends React.Component<BoxProps> {}
    export class Text extends React.Component<BoxProps> {}
    export class Card extends React.Component<BoxProps> {}
    export class Button extends React.Component<BoxProps> {}
    export class ThemeText extends React.Component<BoxProps> {}
    export class Link extends React.Component<BoxProps> {}
    export class Svg extends React.Component<BoxProps> {}
    export class Section extends React.Component<BoxProps> {}
}