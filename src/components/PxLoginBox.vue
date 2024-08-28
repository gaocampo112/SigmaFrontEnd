<template>
  <div
    class="d-flex justify-content-center align-items-center vh-100 flex-column p-3 m-0"
  >
    <h1 class="title text-light d-flex fw-bold rounded px-4 py-1 mb-3">
      SIGMA
    </h1>
    <form
      v-on:submit.prevent="Login"
      class="sinbgInForm shadow rounded fs-5 fw-bold text-light d-flex flex-column justify-content-center align-items-center flex-wrap"
    >
      <div class="d-flex flex-row">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            v-model="selecteOption"
            value="teacher"
          />
          <label class="form-check-label" for="flexRadioDefault1"
            >Teacher</label
          >
        </div>
        <div class="form-check ms-4">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            v-model="selecteOption"
            value="student"
          />
          <label class="form-check-label" for="flexRadioDefault2"
            >Student</label
          >
        </div>
      </div>
      <div>
        <label for="username" class="form-label">Username</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="username"
          aria-describedby="usernameHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
        />
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <button
          type="submit"
          class="btn buttonStyle text-dark fs-5 bg-secondary-subtle fw-bold border border-black"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      username: "",
      password: "",
      students: [],
      selecteOption: "",
    };
  },
  methods: {
    async Login() {
      try {
        if (this.selecteOption == "") {
          return alert("Select if you are a studen or a teacher");
        }
        if (this.selecteOption == "student") {
          const students = await api.getStudentGeneral();
          const authenticatedStudent = students.find(
            (student) =>
              parseInt(student.userName) === parseInt(this.username) &&
              parseInt(student.password) === parseInt(this.password)
          );
          if (authenticatedStudent) {
            this.$store.dispatch("setStudent", authenticatedStudent);
            this.$router.push({ name: "student" });
          } else {
            alert("Incorrect username or password");
          }
        } else {
          const teachers = await api.getTeacherGeneral();
          const authenticatedTeacher = teachers.find(
            (teacher) =>
              parseInt(teacher.userName) === parseInt(this.username) &&
              parseInt(teacher.password) === parseInt(this.password)
          );
          if (authenticatedTeacher) {
            this.$store.dispatch("setStudent", authenticatedTeacher);
            this.$router.push({ name: "teacher" });
          } else {
            alert("Incorrect username or password");
          }
        }
      } catch (error) {
        console.error("Error getting teachers:", error);
      }
    },
  },
};
</script>

<style scoped>
.sinbgInForm {
  width: 420px;
  height: 280px;
  background-image: url("../image/pizarron.png");
  background-size: cover;
  background-position: center;
}

.buttonStyle {
  transition: all 0.3s ease;
}

.buttonStyle:hover {
  background-color: #3b3b3b;
  color: white;
  transform: scale(1.05);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.title {
  letter-spacing: 5px;
  background-color: #648d75;
  border: 8px solid #ba8a53;
}
</style>
