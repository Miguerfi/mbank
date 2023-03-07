import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
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

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={MainScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen name='a' options={{ title: '',headerTransparent:true,headerBackImageSource:() => null}} component={Infos} />
                <Stack.Screen name='Pagamento' options={{title:'',headerTransparent:true,headerBackImageSource:() => null}} component={Pagamento}/>
                <Stack.Screen name='Usercards' options={{title:'',headerTransparent:true,headerBackImageSource:() => null}} component={Usercards}/>
                <Stack.Screen  name='Fisiccard' options={{title:'Cartão físico',headerTitleAlign:'center',headerTransparent:true,headerBackImageSource:() => null}} component={Fisiccard}/>
                <Stack.Screen name='ConfigCardFisic' options={{title:'Configurar Cartão',headerTitleAlign:'center',headerTransparent:true,headerBackImageSource:() => null}} component={ConfigCardFisic}/>
             </Stack.Navigator>
        </NavigationContainer>
    );
}

