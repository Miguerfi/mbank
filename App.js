import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainScreen from './src/pages/main';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContaInfos from './src/pages/conta';
import Infos from './src/pages/conta/Infos';
import infoStyle from './src/pages/conta/Infos/style';
import Pagamento from './src/pages/conta/Pagamento';
import Usercards from './src/pages/cartoes/user_cartoes';
import Fisiccard from './src/pages/cartoes/user_cartoes/cards/fisic';
import ConfigCard from './src/pages/cartoes/user_cartoes/cards/fisic/ConfigCard';
import ConfigCardFisic from './src/pages/cartoes/user_cartoes/cards/fisic/ConfigCard';
import Virtualcard from './src/pages/cartoes/user_cartoes/cards/virtual';
import { HeaderBackButton } from '@react-navigation/elements';
const Stack = createNativeStackNavigator();

export default function App({ navigation }) {

    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={MainScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen name='a' options={{ title: '', headerTransparent: true}} component={Infos} />
                <Stack.Screen name='Pagamento' options={{ title: '', headerTransparent: true}} component={Pagamento} />
                <Stack.Screen name='Usercards' options={{ title: '', headerTransparent: true }} component={Usercards} />
                <Stack.Screen name='Fisiccard' options={{ title: 'Cartão físico', headerTitleAlign: 'center', headerTransparent: true}} component={Fisiccard} />
                <Stack.Screen name='ConfigCardFisic' options={{ title: 'Configurar Cartão', headerTitleAlign: 'center', headerTransparent: true }} component={ConfigCardFisic} />
                <Stack.Screen name='Virtualcard' options={{ title: '', headerTransparent: true}} component={Virtualcard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

