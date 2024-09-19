import { api } from "@/services/api";
import { Companies, Company } from "@/types";

export async function fetchCompanies(): Promise<Companies | null> {
  try {
    const response = await api.get("/companies");
    console.log("API response:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function fetchCompanyById(id: number): Promise<Company | null> {
  try {
    const response = await api.get(`/companies/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// export async function fetchLogo(image_name: string): Promise<string | null> {
//   try {
//     const response = await api.get(`/companies/upload/${image_name}/`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// }
