import { Text, View } from "react-native"
import { ContainerLogin } from "../Styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/button";

const Login = () => {

    const handleOnPress = () => {
        console.log('clicou');
    }

    return (
        <View>
           <ContainerLogin>
            <Text>Login</Text>
            <Input />
            <Button margin="16px" title="ENTRAR" onPress={handleOnPress} />
            
            </ContainerLogin>
        </View>
    );
};

export default Login;