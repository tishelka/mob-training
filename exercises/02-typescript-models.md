# TS-02. Модели данных и коллекции

**Сначала:** [массивы и интерфейсы](../docs/04-arrays-objects-interfaces.md), [union и narrowing](../docs/05-unions-and-narrowing.md).

В `typescript/src/models.ts` дополните модель Activity необязательным `description`. В `utils.ts` самостоятельно реализуйте:
- `getByCategory(items, category)` — фильтрация по категории;
- `getShortest(items)` — самая короткая идея или `undefined`;
- `getActivityTitles(items)` — массив названий.

Придумайте 2–3 теста на пустой список и неизвестную категорию. Не используйте `any` и необоснованный `!` после `find`.

**Критерии:** `npm run check` и `npm test` проходят. Умейте объяснить разницу между `Activity[]` и одним `Activity`.
