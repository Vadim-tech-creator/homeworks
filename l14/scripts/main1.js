function createStudent(firstName, lastName, birthYear) {
    return {
      firstName: firstName, 
      lastName: lastName, 
      birthYear: birthYear, 
      courses: [], 
      
      addCourse(course) {
        if (!this.courses.find(c => c.name === course.name)) {
          this.courses.push({ 
            name: course.name,
            grades: [], 
            attendance: [] 
          });
        }
      },
      removeCourse(courseName) {
        this.courses = this.courses.filter(course => course.name !== courseName)
      },
      addGrade(courseName, grade) {
        const course = this.courses.find(course => course.name === courseName)
        if (course) {
          course.grades.push(grade);
        }
      },
      addAttendance(courseName, isPresent) {
        const course = this.courses.find(course => course.name === courseName)
        if (course) {
          course.attendance.push(isPresent);
        }
      },
      getAverageGrade(courseName) {
        const course = this.courses.find(course => course.name === courseName)
        if (!course || course.grades.length === 0) return 0;
        const total = course.grades.reduce((acc, grade) => acc + grade, 0)
        return total / course.grades.length;
      },
      getAverageAttendance(courseName) {
        const course = this.courses.find(course => course.name === courseName)
        if (!course || course.attendance.length === 0) return 0;
        const total = course.attendance.filter(isPresent => isPresent).length
        return (total / course.attendance.length) * 100; 
      },
      getCompletedClasses(courseName) {
        const course = this.courses.find(course => course.name === courseName)
        return course ? course.attendance.length : 0;
      },
      getInfo() {
        const info = {
          name: this.firstName,
          surname: this.lastName,
          birthYear: this.birthYear,
          courses: this.courses.map(course => ({
            name: course.name,
            averageGrade: this.getAverageGrade(course.name),
            averageAttendance: this.getAverageAttendance(course.name),
            completedClasses: this.getCompletedClasses(course.name)
          }))
        }
        return info;
      }
    }
  }