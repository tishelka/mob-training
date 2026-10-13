# 04. Объекты, массивы и интерфейсы

В приложении «занятие» — не пять отдельных переменных, а **один объект**.

```typescript
interface Activity {
  id: number;
  title: string;
  durationMinutes: number;
  cost: number;
}

const walk: Activity = { id: 1, title: "Прогулка", durationMinutes: 60, cost: 0 };
const items: Activity[] = [walk];
```

Массивы позволяют работать со списком. Самые полезные методы:
- `map` — преобразовать каждый элемент;
- `filter` — оставить подходящие;
- `find` — найти один элемент;
- `some` — есть ли подходящий.

```typescript
const cheap = items.filter((item) => item.cost <= 100);
const titles = items.map((item) => item.title);
const first = items.find((item) => item.id === 1);
```

`find` может вернуть `undefined` — это нормально, но перед обращением к `first.title` проверьте, что объект найден.

Посмотрите `typescript/src/models.ts` и `activities.ts`. Это будущий «кирпич» каталога.

[Дальше: union-типы](05-unions-and-narrowing.md).
