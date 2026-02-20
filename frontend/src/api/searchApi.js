import config from "../config";

export async function searchResumes(query) {
  const response = await fetch(
    `${config.API_BASE_URL}/search?query=${encodeURIComponent(query)}&k=5`
  );

  if (!response.ok) {
    throw new Error("Backend error");
  }

  return await response.json();
}
