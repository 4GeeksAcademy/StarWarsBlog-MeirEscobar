const BASE_URL = 'https://www.swapi.tech/api';

async function fetchList(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) throw new Error(`Could not fetch ${endpoint}: HTTP ${res.status}`);
  const data = await res.json();
  return data.results || [];
}

// Problemas con la carga de la API. Gemini apaña esto con reintentos y manejo de 429. (creo que lo entiendo bien)
async function fetchDetailFromUrl(url, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const res = await fetch(url);
      
      if (res.status === 429) {
          console.warn(`429 Rate Limit en ${url}. Intentando de nuevo en 1 segundo...`);
          await new Promise(resolve => setTimeout(resolve, 1000));
          continue;
      }

      if (!res.ok) {
        throw new Error(`Could not fetch detail ${url}: HTTP ${res.status}`);
      }
      
      const data = await res.json();
      return data?.result?.properties || data?.properties || data;
    
    } catch (err) {
      if (attempt === maxRetries - 1) {
        console.error('Detail fetch failed after all retries for', url, err);
        return null;
      }
      await new Promise(resolve => setTimeout(resolve, 500 * (attempt + 1))); 
    }
  }
}

async function fetchAndDetailResource(resource) {
  try {
    const list = await fetchList(resource);
    
    const detailed = await Promise.all(
      list.map(async (item) => {
        const url = item.url || item.result?.properties?.url || `${BASE_URL}/${resource}/${item.uid}`;
        const detail = await fetchDetailFromUrl(url);
        return detail || { name: item.name, url };
      })
    );
    return detailed;
  } catch (error) {
    console.error(`Error fetching all ${resource}:`, error);
    return [];
  }
}

export const getAllCharacters = () => fetchAndDetailResource('people');

export const getAllPlanets = () => fetchAndDetailResource('planets');

export const getAllVehicles = () => fetchAndDetailResource('vehicles');
