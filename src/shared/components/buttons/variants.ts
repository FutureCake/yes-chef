import { createElement } from "react";
import Button, { ButtonProps } from ".";
import { COLORS } from "../../constants/styles/colors";
import { FONTS } from "../../constants/styles/texts";

const createTextButtonVariant = (defaultProps: Omit<ButtonProps, 'title'>) => {

    return (userProps: ButtonProps) => {

        const props: ButtonProps = {
            ...defaultProps,
            ...userProps,
            style: [defaultProps.style, userProps.style],
            textStyle: [defaultProps.textStyle, userProps.textStyle],
        };

        return createElement(Button, props);
    }
};

export const StrongButton = createTextButtonVariant({
    style: {
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.GREY_700
    },
    textStyle: {
        ...FONTS.comic_sans,
        color: COLORS.WHITE,
    }
});

export const LightButton = createTextButtonVariant({
    style: {
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.GREY_700,
        borderWidth: 1

    },
    textStyle: {
        ...FONTS.comic_sans,
        color: COLORS.BLACK,
    }
});
