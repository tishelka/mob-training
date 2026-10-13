# 15. Формы и фильтры

В React Native ввод текста происходит через `TextInput`. Даже если пользователь ввёл «200», компонент отдаёт **строку**, не число.

```tsx
const [budgetText, setBudgetText] = useState("200");
const budget = Number(budgetText);
const valid = budgetText.trim() !== "" && Number.isFinite(budget) && budget >= 0;
```

При `keyboardType="numeric"` клавиатура удобнее, но данные всё равно нужно проверять.

Форма — это обычно **управляемые поля** (`value` + `onChangeText`), кнопка применения и понятное сообщение об ошибке. Выделите тип фильтров: `{ maxCost: number; category: Category | "any" }`.

Не дублируйте логику в каждом компоненте. Положите чистую функцию `filterActivities` в `src/lib/` и протестируйте её отдельно.

В MVP «ЧтоДальше» фильтры сложнее: участники, время, бюджет, место, настроение. Сначала сделайте бюджет и категорию.

[Дальше: API](16-api-and-errors.md).
