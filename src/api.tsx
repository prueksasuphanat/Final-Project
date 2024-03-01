// api.tsx

export interface Course {
  id: number;
  name: string;
  description: string;
  category: string;


}
export async function fetchData() {
  const response = await fetch('https://72ced2f2-d9dc-48d5-b3d2-d778b161aa65-00-a256fqssrjq8.pike.replit.dev/courses');
  const data = await response.json();
  return data;
}
