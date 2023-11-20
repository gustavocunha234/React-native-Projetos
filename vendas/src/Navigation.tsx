import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreatePet from './modules/createPet/screens/CreatePet';
import CreateUser from './modules/createUser';
import Home from './modules/home/screens/Home';
import Login from './modules/login';
import Splash from './modules/splash';
import { Icon } from './shared/components/icon/Icon';
import { MenuUrl } from './shared/enums/MenuUrl.enum';
import { theme } from './shared/themes/themes';
import Detail from './modules/detail';
import SearchAnimal from './modules/searchAnimal';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const renderTabBarIcon = (color: string, route: RouteProp<ParamListBase, string>) => {
    let iconName: string;

    switch (route.name) {
      case MenuUrl.HOME:
        iconName = 'home';
        break;
      case MenuUrl.CREATE_PET:
        iconName = 'home';
        break;
      case MenuUrl.DETAIL:
          iconName = 'home';
          break;
      case MenuUrl.SEARCH_ANIMAL:
            iconName = 'search';
            break;
      default:
        iconName = 'profile';
        break;
    }

    return <Icon size={16} name={iconName} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => renderTabBarIcon(color, route),
        tabBarActiveTintColor: theme.colors.mainTheme.primary,
        tabBarInactiveTintColor: theme.colors.grayTheme.gray80,
        tabBarLabelStyle: {
          marginBottom: 8,
        },
        tabBarStyle: {
          height: 52,
          padding: 8,
        },
      })}
    >
      <Tab.Screen name={MenuUrl.HOME} component={Home} options={{ headerShown: false }} />
      <Tab.Screen
        name={MenuUrl.CREATE_PET}
        component={CreatePet}
        options={{ title: 'Cadastrar Animal', headerShown: false }}

      />
      
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.DETAIL} component={Detail}
        />
        <Stack.Screen
          name={MenuUrl.CREATE_USER}
          component={CreateUser}
          options={{ title: 'Criar usuário' }}
        />
        <Stack.Screen
          name={MenuUrl.HOME}
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;