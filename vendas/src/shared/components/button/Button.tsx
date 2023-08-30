import {ActivityIndicator, TouchableOpacityProps } from "react-native";
import { ActivityIndicatorButton, ButtonContainer, ButtonDisabled, ButtonSecondary, GradientButton } from "./Button.style";
import Text from "../text/Text";
import { theme } from "../../themes/themes";
import { textTypes } from "../text/textTypes";



interface ButtonProps extends TouchableOpacityProps{

    title: string;
    margin?:string;
    type?: string;
    loading?: boolean;
    disabled?: boolean;
    onPress?: () => void;
}

const Button = ({title, type, loading, disabled, margin, onPress, ...props}: ButtonProps) => {

    const handleOnpress = () => {
        if(!loading && !disabled && onPress){
            onPress();
        }
    }

    const renderText = (color: string) => (
        
        <>

        <Text type={textTypes.BUTTON_BOLD} color={color}>{title}</Text>

        {loading && <ActivityIndicatorButton color={theme.colors.neutralTheme.white} />}

        </>
    );

    if(disabled){
        return (
            <ButtonDisabled {...props} margin={margin}>
                {renderText(theme.colors.neutralTheme.white)}
            </ButtonDisabled>
        )
    }

    switch (type) {
        case theme.buttons.buttonsTheme.secondary:

        return <ButtonSecondary {...props} margin={margin} onPress={handleOnpress} >
        {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>

        case theme.buttons.buttonsTheme.primary:
        default:
            return <ButtonContainer {...props} margin={margin} onPress={handleOnpress}>
            <GradientButton  start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}>
            {renderText(theme.colors.neutralTheme.white)}
            </GradientButton>   
            </ButtonContainer>
    }
};

export default Button;

