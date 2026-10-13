import { forwardRef } from "react";
import { Pressable, StyleSheet, Text, View, type PressableProps, type View } from "react-native";
import type { Activity } from "../types/activity";

type Props = PressableProps & { activity: Activity };

export const ActivityCard = forwardRef<View, Props>(function ActivityCard({ activity, ...props }, ref) {
  return (
    <Pressable ref={ref} {...props} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <Text style={styles.title}>{activity.title}</Text>
      <Text style={styles.subtitle}>{activity.durationMinutes} минут · {activity.cost} ₽</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: { backgroundColor: "#ffffff", borderRadius: 16, padding: 20, borderWidth: 1, borderColor: "#d6e2d6" },
  pressed: { opacity: 0.7 },
  title: { fontSize: 19, fontWeight: "600", color: "#264f35" },
  subtitle: { marginTop: 10, color: "#526456" },
});
