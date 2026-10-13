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

[Дальше: стили](12-styles-flexbox.md).
