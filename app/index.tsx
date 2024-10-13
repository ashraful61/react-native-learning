import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import type { SizeTokens } from 'tamagui'
import { Button, Label, RadioGroup, XStack, YStack } from "tamagui";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>This is the home.</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={styles.button}>
        Go to Profile
      </Link>
      <Button>Plain</Button>
      <RadioGroup aria-labelledby="Select one item" defaultValue="3" name="form">
      <YStack width={300} alignItems="center" space="$2">
        <RadioGroupItemWithLabel size="$3" value="2" label="Second value" />
        <RadioGroupItemWithLabel size="$4" value="3" label="Third value" />
        <RadioGroupItemWithLabel size="$5" value="4" label="Fourth value" />
      </YStack>
    </RadioGroup>
    </View>
  );
}

export function RadioGroupItemWithLabel(props: {
  size: SizeTokens
  value: string
  label: string
}) {
  const id = `radiogroup-${props.value}`
  return (
    <XStack width={300} alignItems="center" space="$4">
      <RadioGroup.Item value={props.value} id={id} size={props.size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label size={props.size} htmlFor={id}>
        {props.label}
      </Label>
    </XStack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: 'blue'
  }
})
