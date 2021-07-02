import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar
} from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon"
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container} >
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
    />

      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Schedule your {`\n`} game matches {`\n`} easily
        </Text>

        <Text style={styles.subtitle}>
          Create groups to play your favorites {`\n`} games with your friends
        </Text>

        <ButtonIcon 
        title="Join with Discord"
        activeOpacity={0.7}
        />
      </View>
    </View>
  );
}