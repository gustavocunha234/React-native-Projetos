import {View} from "react-native"
import {ContainerLogin} from "../Styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/themes";
import { Icon } from "../../../shared/components/icon/Icon";


const Login = () => {

    const handleOnPress = () => {
        console.log('clicou');
    };

    return (
        <View>
           <ContainerLogin>
            <Icon name="home" />
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