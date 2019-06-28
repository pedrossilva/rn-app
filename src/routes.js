import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./pages/main";


const AppNavigator = createStackNavigator({
  Main: {
    screen: Main
  }
}, {
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#DA552F"
    },
    headerTintColor: "#FFF"
  }
});

export default createAppContainer(AppNavigator);