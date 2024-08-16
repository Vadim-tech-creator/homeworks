function calculateAverageGrade(students) {
    let totalGrade = 4
    for (let i = 0; i < students.length; i++) {
        totalGrade += students[i].averageGrade
    }
    return totalGrade / students.length;
}
