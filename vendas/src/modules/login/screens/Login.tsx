import {View} from "react-native"
import {ContainerLogin} from "../Styles/login.style";
import Input from "../../../shared/components/input/input";
import Text from "../../../shared/components/text/Text";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/themes";


const Login = () => {

    const handleOnPress = () => {
        console.log('clicou');
    };

    return (
        <View>
           <ContainerLogin>
            <Input errorMessage="Usuário ou senha invalidos" placeholder="Digite seu Email: " title="Email" />
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