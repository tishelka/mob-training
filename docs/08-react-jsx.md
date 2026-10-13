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

[Дальше: Expo](09-expo-setup.md).
