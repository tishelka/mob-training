# 03. Условия и функции

Функция принимает параметры и возвращает результат. TypeScript позволяет проверить оба места.

```typescript
function canAfford(cost: number, budget: number): boolean {
  return cost <= budget;
}

const addMinutes = (minutes: number, extra: number): number => minutes + extra;

if (canAfford(100, 200)) {
  console.log("Подходит!");
} else {
  console.log("Дорого");
}
```

Операторы `===` и `!==` сравнивают без неявного приведения типов. `&&` — и, `||` — или, `!` — нет. `return` прекращает выполнение функции.

**Практика:** напишите `fitsTime(duration: number, available: number): boolean`. А затем `getBudgetLabel(cost: number)`, которая возвращает «Бесплатно», если цена нулевая, иначе строку с ценой.

Проверяйте ввод: `NaN` — тоже числовой тип на уровне TS, поэтому для реальных форм пригодится `Number.isFinite`.

[Дальше: объекты](04-arrays-objects-interfaces.md).
