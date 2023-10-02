import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePet from './modules/createPet/screens/CreatePet';
import CreateUser from './modules/createUser';
import Home from './modules/home/Home';
import Login from './modules/login';
import Splash from './modules/splash';
import { MenuUrl } from './shared/enums/MenuUrl.enum';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.CREATE_USER} component={CreateUser} options={{ title: 'Criar usuário' }} />
        <Stack.Screen name={MenuUrl.HOME} component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name={MenuUrl.CREATE_PET} component={CreatePet} options={{ title: 'Criar pet' }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;