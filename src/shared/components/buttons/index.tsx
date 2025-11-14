import { Pressable, PressableProps, StyleProp, Text, TextStyle } from "react-native";

export interface ButtonProps extends PressableProps {
    title: string;
    textStyle?: StyleProp<TextStyle>
}

export default function Button(props: ButtonProps) {

    const { title, textStyle, ...pressable } = props;

    return (
        <Pressable {...pressable}>
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
}