export async function getDatas() {
  const response = await fetch("/data/mock.json");
  const body = await response.json();
  return body;
}
