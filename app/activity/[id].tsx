import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { activities } from "../../src/data/activities";

export default function ActivityScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const activity = activities.find((item) => item.id === id);

  if (!activity) {
    return <View style={styles.page}><Text>Идея не найдена. Попробуй вернуться назад.</Text></View>;
  }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{activity.title}</Text>
      <Text style={styles.text}>{activity.description}</Text>
      <Text style={styles.meta}>{activity.durationMinutes} минут · {activity.cost} ₽</Text>
      <Text style={styles.hint}>На следующих уроках добавишь избранное и фильтры.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, padding: 24, backgroundColor: "#f5f7f3", gap: 16 },
  title: { fontSize: 28, fontWeight: "700", color: "#264f35" },
  text: { fontSize: 17, lineHeight: 24, color: "#2c3930" },
  meta: { fontSize: 16, color: "#526456" },
  hint: { marginTop: 24, color: "#526456" },
});
