# 11. Компоненты React Native

В вебе есть HTML, а в React Native — свои строительные блоки.

`View` группирует элементы, `Text` показывает текст, `Pressable` обрабатывает нажатие, `Image` рисует картинку, `TextInput` принимает ввод. Для длинной прокручиваемой страницы пригодится `ScrollView`, а для списка карточек лучше `FlatList`.

```tsx
import { Pressable, Text, View } from "react-native";

export function IdeaButton() {
  return (
    <View>
      <Pressable onPress={() => console.log("Нажали!")}>
        <Text>Выбрать идею</Text>
      </Pressable>
    </View>
  );
}
```

Почему не все делать через `Text`? Потому что контейнер, текст и интерактивный элемент имеют разные задачи. Добавляйте `accessibilityLabel`, если значение кнопки неясно по её тексту.

**Откройте** `src/components/ActivityCard.tsx`. Карточка принимает объект через props. Замените текст или добавьте строчку с категорией. Затем создайте компонент `EmptyActivities` для пустого списка.

## Как выглядит полный файл с кнопкой

Создайте `src/components/ActionButton.tsx`:

```tsx
import { Pressable, StyleSheet, Text } from "react-native";

type ActionButtonProps = {
  label: string;
  onPress: () => void;
};

export function ActionButton({ label, onPress }: ActionButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { padding: 14, backgroundColor: "#264f35", borderRadius: 12 },
  pressed: { opacity: 0.75 },
  label: { color: "#ffffff", fontSize: 16, textAlign: "center" },
});
```

На экране используйте:

```tsx
import { ActionButton } from "../src/components/ActionButton";

// Внутри JSX компонента экрана:
<ActionButton label="Попробовать" onPress={() => console.log("Нажали")} />
```

Главное отличие от обычного `Button`: теперь **вы сами управляете внешним видом**, а обработчик приходит из экрана. Пример целого экрана с импортами и стилями — в [уроке 21](21-full-files.md).

[Дальше: стили](12-styles-flexbox.md).
