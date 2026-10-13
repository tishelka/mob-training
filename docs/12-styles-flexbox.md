# 12. Стили и Flexbox

В React Native нет привычных CSS-файлов для основных экранов. Часто используем `StyleSheet.create`:

```tsx
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f7f3" },
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
});
```

По умолчанию дочерние элементы идут **вертикально** (`flexDirection: "column"`). Если нужна строка — `"row"`. `justifyContent` выравнивает вдоль главной оси, `alignItems` — поперёк неё. `flex: 1` позволяет занять доступное место.

В реальном MVP основные цвета живут в `src/theme/tokens.ts`; у нас для упражнения есть `src/theme/colors.ts`. Лучше использовать общие цвета, чем копировать разные оттенки в каждый экран.

**Практика:** сделайте карточку с названием слева и ценой справа, затем уменьшите окно web. Текст не должен выпадать за пределы карточки.

[Дальше: маршруты](13-expo-router.md).
