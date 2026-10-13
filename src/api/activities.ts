import type { Activity } from "../types/activity";

// Понадобится на уроке про fetch. По умолчанию API может быть не запущен.
export async function fetchActivities(apiUrl: string): Promise<Activity[]> {
  const response = await fetch(`${apiUrl}/activities`);
  if (!response.ok) throw new Error(`Сервер ответил: ${response.status}`);
  const data: unknown = await response.json();
  if (!Array.isArray(data)) throw new Error("Ожидали список активностей");
  // В настоящем приложении обязательно проверьте каждую запись в runtime.
  return data as Activity[];
}
