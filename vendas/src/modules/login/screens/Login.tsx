import {View} from "react-native"
import {ContainerLogin} from "../Styles/login.style";
import Input from "../../../shared/components/input/input";
import Text from "../../../shared/components/text/Text";
import Button from "../../../shared/components/button/Button";


const Login = () => {

    const handleOnPress = () => {
        console.log('clicou');
    };

    return (
        <View>
           <ContainerLogin>
           <Text>teste</Text>
            <Input />
            <Button margin="16px" title="LOGAR" onPress={handleOnPress}></Button>
            
            </ContainerLogin>
        </View>
    );
};

export default Login;