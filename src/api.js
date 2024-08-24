/* const url = "http://studentsigma.somee.com/api"; */
const url = "http://localhost:5217";

function getStudentById(id) {
  return fetch(`${url}/student/getstudentinfo/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

async function getStudentGeneral() {
  try {
    const response = await fetch(`${url}/api/student/GetAllStudents`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !Array.isArray(data)) {
      throw new Error(
        "La respuesta de la API no contiene un array de estudiantes"
      );
    }

    return data;
  } catch (error) {
    console.error("Error al obtener datos de estudiantes:", error.message);
    throw error;
  }
}

async function getSubjectGeneral() {
  try {
    const response = await fetch(`${url}/api/subject/GetAllSubjects`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !Array.isArray(data)) {
      throw new Error("The API response does not contain an array of subjects");
    }

    return data;
  } catch (error) {
    console.error("Error getting subject data:", error.message);
    throw error;
  }
}

async function getGradeGeneral() {
  try {
    const response = await fetch(`${url}/api/grade/GetAllGrades`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !Array.isArray(data)) {
      throw new Error("The API response does not contain an array of grades");
    }

    return data;
  } catch (error) {
    console.error("Error getting subject data:", error.message);
    throw error;
  }
}

export default {
  getStudentById,
  getStudentGeneral,
  getSubjectGeneral,
  getGradeGeneral,
};
