import {ImageBackground, TouchableOpacity, View, StyleSheet, Image} from "react-native"
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
            <View>
            <Image
              style={styles.header}
              source={require("../../../assets/images/shape1.png")}
              
            />
           </View>
            <View>
            <ImageBackground
            source={require('../../../assets/images/backgroud.png')}
            style={styles.container}
            >
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
             
             
             title="Login"
             onPress={handleOnPress}>
                
                    </Button>
                    
                    </ImageBackground>
                    </View>
                   
                    
            </ContainerLogin>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
      header: {
        width: 200,
        height: 200,
        top: 85,
        right: 105
        
      }


});

export default Login;