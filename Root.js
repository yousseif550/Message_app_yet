import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Connexion from "./screens/Connexion";
import Inscription from "./screens/Inscription";
import Dashboard from "./screens/Dashboard"

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Inscription" component={Inscription} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}