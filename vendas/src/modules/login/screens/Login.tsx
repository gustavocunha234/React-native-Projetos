import { Text, View } from "react-native"
import { ContainerLogin } from "../Styles/login.style";
import Input from "../../../shared/components/input/input";

const Login = () => {
    return (
        <View>
           <ContainerLogin>
            <Text>teste</Text>
            <Input />
            </ContainerLogin>
        </View>
    );
};

export default Login;