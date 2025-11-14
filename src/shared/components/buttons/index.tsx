import { Pressable, PressableProps, StyleProp, Text, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps extends Omit<PressableProps, "style"> {
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

export default function Button(props: ButtonProps) {

    const { title, textStyle, ...pressable } = props;

    return (
        <Pressable {...pressable}>
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
}