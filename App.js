import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Componentscreen from "./src/screens/Componentscreen";
import List from "./src/screens/List";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: Componentscreen,
    ListComp: List,
    ImageScreen: ImageScreen,
    Counter: Counter,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My App",
    },
  }
);

export default createAppContainer(navigator);
