# 14. Состояние: интерфейс должен реагировать

`props` — данные, которые пришли компоненту сверху. `state` — данные, которые сам компонент хранит между рендерами.

```tsx
import { useState } from "react";
import { Pressable, Text } from "react-native";

export function Counter() {
  const [count, setCount] = useState(0);
  return <Pressable onPress={() => setCount((n) => n + 1)}><Text>{count}</Text></Pressable>;
}
```

Не изменяйте массив состояния через `push`. Создавайте новую копию: `setIds((ids) => [...ids, newId])`. Удаление: `ids.filter((id) => id !== target)`.

`useEffect` полезен для синхронизации с внешними системами, например запроса к API. Не используйте его для обычного вычисления `filtered = items.filter(...)` — это можно посчитать при рендере.

**Идея для практики:** кнопка «В избранное» меняет список ID и текст кнопки. После перезагрузки страницы состояние пропадёт, пока не подключите хранение на сервере.

## Целый компонент со своим состоянием

Создайте `src/components/FavoriteToggle.tsx`:

```tsx
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type FavoriteToggleProps = { title: string };

export function FavoriteToggle({ title }: FavoriteToggleProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggle() {
    setIsFavorite((current) => !current);
  }

  return (
    <Pressable style={styles.button} onPress={toggle}>
      <Text style={styles.text}>
        {isFavorite ? "★ В избранном" : `☆ Добавить «${title}»`}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { padding: 14, borderRadius: 12, backgroundColor: "#e5eee6" },
  text: { color: "#264f35", fontSize: 16 },
});
```

Используйте `<FavoriteToggle title={activity.title} />` на экране деталей. Это **локальное состояние одной кнопки**: если один и тот же объект показан на нескольких экранах, кнопки пока не синхронизированы. В задании про избранное вы перенесёте состояние выше, чтобы оба экрана видели одно значение. [Целые файлы приложения](21-full-files.md).

[Дальше: формы](15-forms-and-filters.md).
