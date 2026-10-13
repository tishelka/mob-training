# 08. React и JSX: интерфейс из функций

В React **компонент** — функция, которая описывает, что показать. Для React Native вместо HTML-тегов `div` и `p` используем `View` и `Text`.

```tsx
import { Text, View } from "react-native";

type GreetingProps = { name: string };

export function Greeting({ name }: GreetingProps) {
  return <View><Text>Привет, {name}!</Text></View>;
}
```

`<Greeting name="Аня" />` передаёт **props** — входные данные. JSX похож на HTML, но это синтаксис для описания компонентов внутри TypeScript. Файлы с JSX называются `.tsx`, обычная логика — `.ts`.

Списки обычно выводят через `items.map` или `FlatList`. Для каждого элемента нужен **стабильный key**. Не используйте индекс массива как ключ, если элементы могут менять порядок.

**Важно:** компоненты должны оставаться предсказуемыми. Не отправляйте сетевой запрос прямо во время каждого рендера.

## Полный пример компонента

В реальном файле есть не только `return`, но ещё **импорты, описание props, экспорт и стили**. Создайте `src/components/GreetingCard.tsx`:

```tsx
import { StyleSheet, Text, View } from "react-native";

type GreetingCardProps = {
  name: string;
  subtitle?: string;
};

export function GreetingCard({ name, subtitle }: GreetingCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Привет, {name}!</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: "#ffffff", borderRadius: 12 },
  title: { fontSize: 20, fontWeight: "600" },
  subtitle: { marginTop: 8, color: "#555555" },
});
```

**Как использовать:** в `app/index.tsx` импортируйте `GreetingCard` и вставьте `<GreetingCard name="Аня" subtitle="Пробуем React" />` внутри `View`. Файл **экспортирует** компонент, экран **импортирует**, а props передают в него значения. [Целые файлы текущего приложения](21-full-files.md).

[Дальше: Expo](09-expo-setup.md).
