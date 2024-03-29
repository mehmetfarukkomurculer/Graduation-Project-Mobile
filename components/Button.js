import { Pressable, View, StyleSheet, Text } from "react-native";

function Button(props) {
  return (
    <View style={buttonStyles.buttonContainer}>
      <Pressable android_ripple={{color: '#495579'}}  style={({pressed}) => pressed ? buttonStyles.pressedButton : buttonStyles.button} onPress={props.onPressFunction}>
        <Text style={buttonStyles.buttonText}>{props.title}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const buttonStyles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    width: "100%",
    backgroundColor: "white",
  },
  pressedButton: {
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    width: "100%",
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 8,
    backgroundColor: "#495579",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: '#495579',
  },
});
