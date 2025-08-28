import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";

import styles from "./loaderStyles";

const Loader = () => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      progress.setValue(0);
      Animated.timing(progress, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => animate());
    };

    animate();
  }, [progress]);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: widthInterpolated }]} />
    </View>
  );
};

export default Loader;
