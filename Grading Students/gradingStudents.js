const gradingStudents = grades => {
  if (!Array.isArray(grades)) return;

  const result = [];

  // Looping through the grades
  grades.forEach(grade => {

    // If a grade is lower than 38 just add it to the results
    // either add it to the results if a result of dividing grade with remainder is lower than 3 
    if (grade < 38 || grade % 5 < 3) {
      result.push(grade);
    } else {
      
      // Or just add the next multiple of 5.
      // The example for 73:
      // 73 / 5 = 14.6
      // Math.ceil(14.6) = 15
      // 15 * 5 = 75
      // Add 75 to the results
      result.push(Math.ceil(grade / 5) * 5);
    }
  });

  return result;
};
