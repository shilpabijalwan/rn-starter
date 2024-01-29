import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Componentscreen from "./src/screens/Componentscreen";
import List from "./src/screens/List";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: Componentscreen,
    ListComp: List,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My App",
    },
  }
);

export default createAppContainer(navigator);
