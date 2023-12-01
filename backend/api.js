const BASE_URL = 'http://localhost:3000';

export const fetchDataForTable = async (tableName) => {
  try {
    const response = await fetch(`${BASE_URL}/getData/${tableName}`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
