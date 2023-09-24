import {TouchableOpacity, View} from "react-native"
import {ContainerLogin, ImageLogo} from "../Styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/themes";
import { useLogin } from "../hooks/useLogin";
import Text from "../../../shared/components/text/Text";
import { textTypes } from "../../../shared/components/text/textTypes";




const Login = () => {

    const{
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
        handleGoToCreateUser,
    } = useLogin();


    

    return (
        <View>
           <ContainerLogin>
           <ImageLogo resizeMode='contain' source={require('../../../assets/images/logo.png')} />
            <Input 
             value={email}
             errorMessage={errorMessage}
             margin='0px 0px 8px 0px'
             placeholder="Digite seu Email: " 
             title="Email"
             onChange={handleOnChangeEmail}
              />
            <Input
            errorMessage={errorMessage}
            value={password}
            secureTextEntry 
            placeholder="Digite sua Senha: " 
            title="Senha"
            onChange={handleOnChangePassword} />

            <TouchableOpacity onPress={handleGoToCreateUser}>
            <Text margin="16px" type={textTypes.PARAGRAPH_SEMI_BOLD} color={theme.colors.mainTheme.primary}>Cadastrar Usuário</Text>
            </TouchableOpacity>
            <Button 
             type={theme.buttons.buttonsTheme.primary} 
             
             title="ENTRAR"
             onPress={handleOnPress}>
                    </Button>
            
            </ContainerLogin>
        </View>
    );
};

export default Login;