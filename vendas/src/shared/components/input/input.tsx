import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, TextInputProps, View } from "react-native"
import { ContainerInput, IconEye } from "./input.style"
import {DisplayFlexColumn} from '../globalStyles/globalView.style'
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { theme } from "../../themes/themes";
import { forwardRef, useState } from "react";
import { Icon } from "../icon/Icon";
import { insertMaskInCpf } from "../../functions/cpf";
import { insertMaskInPhone } from "../../functions/phone";


interface InputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
    secureTextEntry?: boolean;
    margin?: string;
    type?: 'cel-phone' | 'cpf';

}

const Input = forwardRef<TextInput, InputProps> (

({ margin, secureTextEntry,errorMessage, title, onChange, type, ...props}: InputProps, ref) => {

    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

    const handleOnChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
       if(onChange) {
        let text = event.nativeEvent.text;
        switch (type) {
            case 'cpf':
                text = insertMaskInCpf(text);
                break;
            case 'cel-phone':
                text = insertMaskInPhone(text);
                break;
        
            default:
                text = event.nativeEvent.text
                break;
        }
    
        onChange({
            ...event,
            nativeEvent: {
             ...event.nativeEvent,
                text,
            },
        });
      }   
    };

    const handleOnClickEye = () => {
        setCurrentSecure((current) => !current);
    };



    return (
        <DisplayFlexColumn margin={margin}>
            {title && (
                <Text margin='0px 0px 4px 8px' color={theme.colors.grayTheme.gray100} type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}>{title}</Text>
            )}

        <View>
        <ContainerInput  hasSecureTextEntry={secureTextEntry} secureTextEntry={currentSecure} isError={errorMessage} onChange={handleOnChange} ref={ref} {...props}  />
         {secureTextEntry && <IconEye onPress={handleOnClickEye} name={currentSecure ? 'eye' : 'eye-blocked'} size={20}/>}
        </View>
        {errorMessage && (
            <Text margin='0px 0px 0px 8px' type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD} color={theme.colors.OrangeTheme.orange80}>
                {errorMessage}
            </Text>
        )}
        </DisplayFlexColumn>
    );
})

export default Input