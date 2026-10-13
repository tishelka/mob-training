# 21. Читаем целые файлы, а не обрывки кода

Главная трудность в новом фреймворке — понять, **куда положить код и как файлы связаны**. Поэтому ниже приведены **шесть файлов существующего учебного приложения полностью**, от импортов до стилей. Держите рядом VS Code и сравнивайте строки с файлами репозитория.

## Карта связей

```text
src/types/activity.ts  → задаёт тип Activity
         ↓
src/data/activities.ts → массив Activity[]
         ↓
app/index.tsx → FlatList → src/components/ActivityCard.tsx
         │
         └─ Link + id → app/activity/[id].tsx
                                    ↑
                            src/data/activities.ts

app/_layout.tsx → Stack, общий каркас экранов
```

Типы, данные, компоненты и страницы выполняют **разные задачи**, хотя используются вместе.

## 1. Тип занятия: src/types/activity.ts

Это только типы. Интерфейс помогает TS проверять остальные файлы, но не создаёт данных во время работы приложения.

```typescript
export type ActivityCategory = "walks" | "games" | "creative";

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  durationMinutes: number;
  cost: number;
}
```

## 2. Массив занятий: src/data/activities.ts

Импорт типа позволяет убедиться, что каждый объект содержит обязательные поля. Экран импортирует именно массив из этого файла.

```typescript
import type { Activity } from "../types/activity";

export const activities: Activity[] = [
  { id: "1", title: "Прогулка в парке", description: "Выбери новое место для прогулки.", category: "walks", durationMinutes: 60, cost: 0 },
  { id: "2", title: "Настольная игра", description: "Собери друзей и попробуй новую игру.", category: "games", durationMinutes: 90, cost: 200 },
  { id: "3", title: "Нарисовать открытку", description: "Сделай маленькую открытку своими руками.", category: "creative", durationMinutes: 40, cost: 100 },
];
```

## 3. Карточка: src/components/ActivityCard.tsx

Видны все части компонента: imports → Props → JSX → styles. `forwardRef` и `...props` помогают использовать карточку с `Link asChild`.

```tsx
import { forwardRef } from "react";
import { Pressable, StyleSheet, Text, type PressableProps, type View } from "react-native";
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
```

## 4. Навигация: app/_layout.tsx

`Stack` объединяет экраны и задаёт их заголовки. В этом файле нет массива занятий — это нормально.

```tsx
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerStyle: { backgroundColor: "#f5f7f3" }, headerTintColor: "#264f35" }}>
        <Stack.Screen name="index" options={{ title: "Идеи для отдыха" }} />
        <Stack.Screen name="activity/[id]" options={{ title: "Об идее" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
```

## 5. Главный экран: app/index.tsx

Экран получает данные, передаёт очередной объект через props карточке и передаёт ID при переходе на детали.

```tsx
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
```

## 6. Детальный экран: app/activity/[id].tsx

Экран получает `id` из маршрута и ищет объект. Условие для отсутствующего ID предотвращает ошибку.

```tsx
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
```

## Что происходит при нажатии на карточку?

1. `app/index.tsx` импортирует массив `activities` и рендерит его через `FlatList`.
2. Каждый `item` передаётся в `<ActivityCard activity={item} />`. Это **props**, не отдельный сетевой запрос.
3. `Link` открывает маршрут с конкретным `id`, например `/activity/2`.
4. `app/activity/[id].tsx` читает значение через `useLocalSearchParams` и ищет нужную запись.
5. Если записи нет, экран показывает сообщение, а не падает.

### Где видно начало и конец компонента?

В файле экрана идут **импорты**, затем `export default function ...`, внутри `return ( ... )` с JSX, а после — `StyleSheet.create`. Не все файлы обязаны иметь стили: например, файлы типов и данных их не содержат.

### Мини-практика

Добавьте `difficulty: "easy" | "medium"` в интерфейс `Activity`, значения в массив и подпись сложности на детальном экране. Запустите `npm run typecheck`. Так вы руками пройдёте цепочку **тип → данные → экран**.

[Назад к карте файлов](19-how-files-connect.md) · [К заданиям](../README.md)
