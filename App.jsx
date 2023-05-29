import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home' // assuming the path to Home.js is correct
import JobCard from './components/JobCard'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='JobCard' component={JobCard} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  )
}

export default App
