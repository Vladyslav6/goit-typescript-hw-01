import axios from "axios";




async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url); // Вказуємо axios, який тип даних очікуємо
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}