# 05. Union и narrowing: разные состояния без путаницы

Когда значение может быть одним из нескольких вариантов, используйте **union**:

```typescript
type Category = "walks" | "games" | "creative";
let category: Category = "walks";
```

Нельзя случайно присвоить `"sport"`, пока не добавите её в тип.

Поля могут быть необязательными: `description?: string`. А вот `string | null` означает, что поле присутствует, но может быть null.

Для загрузки данных удобно описывать **разные состояния**:

```typescript
type LoadState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; items: string[] };

function describe(state: LoadState): string {
  if (state.status === "error") return state.message;
  if (state.status === "ready") return String(state.items.length);
  return "Загрузка...";
}
```

TypeScript понимает, какие поля доступны в каждой ветке. Это и есть **narrowing** — сужение типа после проверки.

**Попробуйте:** добавьте в LoadState статус «empty» и обработайте его.

[Дальше: модули и async](06-modules-and-async.md).
