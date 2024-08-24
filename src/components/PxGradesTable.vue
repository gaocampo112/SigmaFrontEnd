<template>
  <table class="table shadow border-black border">
    <thead>
      <tr>
        <th scope="col">Subject</th>
        <th scope="col">Grade 1</th>
        <th scope="col">Grade 2</th>
        <th scope="col">Grade 3</th>
        <th scope="col">Grade 4</th>
        <th scope="col">Final</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="subject in subjects" :key="subject.subjectName">
        <th scope="row">{{ subject.subjectName }}</th>
        <td scope="row">{{ gradesByType("1", subject) }}</td>
        <td scope="row">{{ gradesByType("2", subject) }}</td>
        <td scope="row">{{ gradesByType("3", subject) }}</td>
        <td scope="row">{{ gradesByType("4", subject) }}</td>
        <td scope="row">{{ gradeTotal(subject) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      subjects: [],
      grades: [],
    };
  },
  props: {
    student: {
      type: Object,
    },
  },
  async created() {
    try {
      this.subjects = await api.getSubjectGeneral();
      this.grades = await api.getGradeGeneral();
    } catch (error) {
      console.error("Error fetching subjects:", error.message);
    }
  },
  computed: {
    gradesByType() {
      return (gradeType, subject) => {
        const student = this.$store.getters.student;
        const grade = this.grades.find(
          (g) =>
            g.subjectId == subject.subjectId &&
            g.gradeType == gradeType &&
            g.studentId == student.studentId
        );
        return grade ? grade.grade1 : 0;
      };
    },
    gradeTotal() {
      return (subject) => {
        const student = this.$store.getters.student;
        const gradesForSubject = this.grades.filter(
          (g) =>
            g.subjectId === subject.subjectId &&
            g.studentId === student.studentId
        );

        const total =
          gradesForSubject.reduce((sum, g) => sum + parseFloat(g.grade1), 0) /
          4;
        return gradesForSubject.length > 0 ? total.toFixed(1) : 0;
      };
    },
  },
};
</script>
