import {View} from "react-native"
import {ContainerLogin, ImageLogo} from "../Styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/themes";



const Login = () => {

    const handleOnPress = () => {
        console.log('clicou');
    };

    return (
        <View>
           <ContainerLogin>
           <ImageLogo resizeMode='contain' source={require('../../../assets/images/logo.png')} />
            <Input margin='0px 0px 8px 0px' placeholder="Digite seu Email: " title="Email" />
            <Input secureTextEntry placeholder="Digite sua Senha: " title="Senha" />
            <Button  type={theme.buttons.buttonsTheme.primary} 
                     margin="16px"
                     title="ENTRAR"
                     onPress={handleOnPress}>
                     
                    
                    </Button>
            
            </ContainerLogin>
        </View>
    );
};

export default Login;