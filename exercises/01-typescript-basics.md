# TS-01. Начинаем с языка

**Сначала:** [уроки 01–03](../docs/01-typescript-start.md).

В `typescript/src/` создайте `basics.ts`.

Сделайте функцию `isAffordable(cost: number, budget: number): boolean`; затем функцию `describeIdea(title: string, durationMinutes: number): string`.

Проверьте случаи: цена 0, цена равна бюджету, цена выше бюджета. Выведите результаты в терминал через `demo.ts`.

**Критерии:** `npm run check` проходит, `npm run demo` показывает понятный результат, в коде нет `any`. Напишите 2–3 предложения, чем `const` отличается от `let`.

**Бонус:** добавьте тесты в `typescript/tests/`. Покажите изменение через коммит и PR.
