// api.tsx

export interface Course {
  id: number;
  name: string;
  description: string;
  category: string;


}
export async function fetchData() {
  const response = await fetch('https://ab23f3c3-33b0-4e00-b12c-50e6c580dc1b-00-2fk3sn5rmyk2g.worf.replit.dev/courses');
  const data = await response.json();
  return data;
}
