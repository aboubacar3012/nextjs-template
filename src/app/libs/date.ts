/**
 * Cette fonction convertit une date au format ISO en une chaîne de caractères au format "JJ/MM/AAAA à HH:MM".
 * @param dateStr : string, date au format ISO. Exemple: "2024-08-13T00:00:00.000Z"
 * @returns string, date au format "JJ/MM/AAAA à HH:MM"
 */
export const convertISOToFormattedDate = (dateStr: string) => {
  // Convert the string to a Date object
  const dateObj = new Date(dateStr);

  // Get the date components
  const day = String(dateObj.getUTCDate()).padStart(2, '0');
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed in JS
  const year = dateObj.getUTCFullYear();
  const hours = String(dateObj.getUTCHours()).padStart(2, '0');
  const minutes = String(dateObj.getUTCMinutes()).padStart(2, '0');

  // Format the date in the desired format
  const formattedDate = `${day}/${month}/${year} à ${hours}:${minutes}`;
  return formattedDate;
}

/**
 * Cette fonction convertit une date format AAAA-MM-JJ en une chaine au format JJ/MM/AAAA
 * @param date : string, date au format ISO. Exemple: "AAAA-MM-JJ'
 * @returns string, date au format "JJ/MM/AAAA"
 */
export function convertYYYYMMDDToDDMMYYYY(date: string) {
  // Vérifier que la date est au format AAAA-MM-JJ
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) {
    return;
  }

  // Séparer les composants de la date
  const [year, month, day] = date.split("-");

  // Retourner la date dans le format JJ/MM/AAAA
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

/**
 * Cette fonction convertit une date au format AAAA-MM-JJ au format ISO
 * @param date : string, date au format AAAA-MM-JJ
 * @returns  string, date au format ISO, exemple: "2024-08-13T00:00:00.000Z"
 */
export const convertYYYYMMDDToISO = (date: string) => {
  if (!date) return;
  // Vérifier que la date est au format AAAA-MM-JJ
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) {
    return;
  }

  // Retourner la date au format ISO
  return new Date(date).toISOString();
}

/**
 * Cette fonction convertit une date au format 'lun. 17/6 06h50' en une chaîne de caractères au format ISO 8601.
 * @param inputDate : string, date au format: 'lun. 17/6 06h50'
 * @returns string,  date au format ISO, exemple: "2024-08-13T06:50:00.000Z"
 */
export const convertFormattedDateToISO = (inputDate: string): string | undefined => {
  try {
    // Extraire le jour, le mois et l'heure depuis la chaîne d'entrée
    const dateRegex = /\w+\.\s(\d{1,2})\/(\d{1,2})\s(\d{2})h(\d{2})/;
    const match = inputDate.match(dateRegex);
    if (!match) {
      throw new Error('Format de date invalide');
    }

    const [, day, month, hour, minute] = match;
    const currentYear = new Date().getFullYear();

    // Créer un objet Date avec les valeurs extraites
    const parsedDate = new Date(currentYear, parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));

    // Vérifier si la date est valide
    if (isNaN(parsedDate.getTime())) {
      throw new Error('Date invalide');
    }

    // Formater la date en chaîne ISO 8601
    return parsedDate.toISOString();
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erreur lors de la conversion de la date :', error.message);
    } else {
      console.error('Erreur lors de la conversion de la date :', error);
    }
    return undefined;
  }
};