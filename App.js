import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import ThemeProvider from "./src/state";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main_Stack from "./src/navigators";
import DrawerContent from "./src/Components/DrawerContent/index";

const Navigator = createDrawerNavigator()
const App = (props) => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigator.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
          <Navigator.Screen name="main" component={Main_Stack} />
        </Navigator.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}
export default App 
