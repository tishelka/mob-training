import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ActivityCard } from "../src/components/ActivityCard";
import { activities } from "../src/data/activities";

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.heading}>Что поделать сегодня?</Text>
      <Text style={styles.subtitle}>Маленькое приложение для практики. Нажми на карточку.</Text>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={{ pathname: "/activity/[id]", params: { id: item.id } }} asChild>
            <ActivityCard activity={item} />
          </Link>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#f5f7f3", paddingHorizontal: 20, paddingTop: 24 },
  heading: { fontSize: 26, fontWeight: "700", color: "#264f35" },
  subtitle: { marginTop: 8, color: "#526456", lineHeight: 22 },
  list: { paddingVertical: 18, gap: 12 },
});
