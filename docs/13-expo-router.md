# 13. Expo Router: папки становятся экранами

**Expo Router** — навигация через файловую структуру. `app/index.tsx` отвечает за `/`, а `app/activity/[id].tsx` — за экран вроде `/activity/2`. Скобки `[id]` означают динамический параметр.

```tsx
import { Link } from "expo-router";

<Link href={{ pathname: "/activity/[id]", params: { id: "2" } }}>
  Открыть идею
</Link>
```

На экране читаем параметр с помощью `useLocalSearchParams`. В `app/_layout.tsx` размещён `Stack` — переходы экранами, как стопка карточек.

**Вкладки:** позднее сделаете `app/(tabs)/_layout.tsx` с `Tabs`, а рядом `index.tsx`, `favorites.tsx` и `profile.tsx`. Скобки круглые — **группа маршрутов**, её название не становится частью URL.

В этой заготовке уже работает Stack с двумя экранами. Сначала разберитесь с ним, а вкладки добавьте позже самостоятельно.

**Попробуйте:** добавить экран `app/about.tsx` и ссылку на него с главного экрана.

## Два связанных файла: маршрут и переход

Допустим, добавляем страницу «О приложении». Создайте файл `app/about.tsx` **целиком**:

```tsx
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>О приложении</Text>
      <Text>Учимся делать мобильный интерфейс на Expo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, padding: 24, backgroundColor: "#f5f7f3" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
});
```

Теперь **в уже существующем** `app/index.tsx` подключите `Link` (он там уже импортирован) и добавьте внутрь JSX:

```tsx
<Link href="/about">О приложении</Link>
```

Здесь `about.tsx` — полноценная новая страница, а `Link` — ссылка, которая открывает её. При необходимости дополните `app/_layout.tsx` строкой `<Stack.Screen name="about" options={{ title: "О приложении" }} />`, чтобы задать красивый заголовок. [Как всё это выглядит в уже готовых файлах](21-full-files.md).

[Дальше: состояние](14-state-and-hooks.md).
