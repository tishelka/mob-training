# 06. Модули, Promise и async/await

В большом проекте нельзя держать всё в одном файле. `export` отдаёт функцию наружу, `import` получает её в другом модуле.

```typescript
// utils.ts
export function double(value: number): number {
  return value * 2;
}
```

```typescript
// demo.ts — в проекте с NodeNext используется .js в пути импорта
import { double } from "./utils.js";
console.log(double(10));
```

**Асинхронность:** ответ сервера не появляется мгновенно. `Promise<T>` — обещание получить `T` позже. `await` позволяет дождаться результата.

```typescript
async function getNumber(): Promise<number> {
  return 42;
}

async function main() {
  try {
    const number = await getNumber();
    console.log(number);
  } catch (error) {
    console.error("Не получилось", error);
  }
}
```

В TypeScript-упражнениях используем NodeNext, а Expo использует свою систему сборки: формат путей импорта зависит от проекта. Сначала посмотрите существующие файлы.

**Попробуйте:** написать `async function waitAndReturnTitle(): Promise<string>` без таймера — пусть просто возвращает название. Затем вызвать её через await. Разница станет понятнее на уроке про `fetch`.

[Дальше: тесты](07-ts-testing.md).
