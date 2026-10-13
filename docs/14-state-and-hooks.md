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

[Дальше: формы](15-forms-and-filters.md).
