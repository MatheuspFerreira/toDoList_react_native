import { StackNavigationProp } from "@react-navigation/stack";

type TelaANavigationProp = StackNavigationProp<RootStackParamList, "home">;

export interface SplashProps {
  navigation: TelaANavigationProp;
}

// Defina as rotas e parâmetros da sua navegação
type RootStackParamList = {
  home: undefined;
};
