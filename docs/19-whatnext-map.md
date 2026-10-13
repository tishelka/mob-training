# 19. Сравниваем тренировочный код с «ЧтоДальше»

Теперь открывайте настоящий [репозиторий MVP](https://github.com/tishelka/chtodalshe). Он крупнее, но кирпичики уже знакомы.

| Наш практикум | Реальный MVP |
|---|---|
| `app/_layout.tsx` | [корневая навигация](https://github.com/tishelka/chtodalshe/blob/master/app/_layout.tsx) |
| `app/index.tsx` | [маршруты app](https://github.com/tishelka/chtodalshe/tree/master/app) |
| `src/components/ActivityCard.tsx` | [компонент карточки](https://github.com/tishelka/chtodalshe/blob/master/src/features/activities/ActivityCard.tsx) |
| `src/types/activity.ts` | [типы домена](https://github.com/tishelka/chtodalshe/blob/master/src/types/domain.ts) |
| `src/lib/filterActivities.ts` | [движок рекомендаций](https://github.com/tishelka/chtodalshe/blob/master/src/features/recommendations/engine.ts) |
| `src/api/activities.ts` | [ApiRepository](https://github.com/tishelka/chtodalshe/blob/master/src/data/apiRepository.ts) |
| `useState` | [AppProvider](https://github.com/tishelka/chtodalshe/blob/master/src/features/preferences/AppProvider.tsx) |

В MVP: **React Native, Expo SDK 57, TypeScript, Expo Router**, а интерфейс состоит из онбординга, главного экрана, фильтров, рекомендаций, избранного, истории и профиля.

Движок рекомендаций написан на **TypeScript в мобильном клиенте**, сервер — FastAPI + PostgreSQL. Данные сохраняются на сервере, отдельного локального деморежима в текущем MVP нет.

Найдите путь «нажали кнопку → вызвали функцию → отправили HTTP → обновили экран». Если понимаете каждый переход, вы уже готовы разбирать реальные задачи.

[На главную](../README.md).
