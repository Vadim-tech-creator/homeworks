function createStudent(firstName, lastName, birthYear, course) {
    return {
      firstName: firstName, 
      lastName: lastName, 
      birthYear: birthYear, 
      grades: [], 
      attendance: [], 
      course: course, 
      
      addGrade(grade) {
        this.grades.push(grade);
      },
      addAttendance(isPresent) {
        this.attendance.push(isPresent);
      },
      getAverageGrade() {
        if (this.grades.length === 0) return 0
        const total = this.grades.reduce((acc, grade) => acc + grade, 0)
        return total / this.grades.length;
      },
      getAverageAttendance() {
        if (this.attendance.length === 0) return 0
        const total = this.attendance.filter(isPresent => isPresent).length
        return (total / this.attendance.length) * 100; 
      },
      getCompletedClasses() {
        return this.attendance.length;
      },
      changeCourse(newCourse) {
        this.course = newCourse
        this.grades = []
        this.attendance = []
      },
      getInfo() {
        return {
          name: this.firstName,
          surname: this.lastName,
          birthYear: this.birthYear,
          course: this.course,
          averageGrade: this.getAverageGrade(),
          averageAttendance: this.getAverageAttendance(),
          completedClasses: this.getCompletedClasses()
        }
      }
    }
  }