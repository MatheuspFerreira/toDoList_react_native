import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles/splash";
import { SplashProps } from "./interface/SplashProps";

export function Splash({ navigation }: SplashProps) {
  useEffect(() => {
    const initial = setTimeout(() => {
      navigation.navigate("home");
    }, 3000);

    return () => {
      clearTimeout(initial);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>To.do</Text>
      <Text style={styles.p}>
        Seu aplicativo{"\n"}
        favorito de afazeres
      </Text>

      <ActivityIndicator size="large" color="white" />
    </View>
  );
}
