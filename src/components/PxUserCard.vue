<template>
  <div>
    <div
      class="card d-flex align-items-center me-3 p-4 shadow border border-black"
      style="width: 250px"
    >
      <img src="../image/usuario.png" height="100" width="100" />
      <div class="d-flex flex-column justify-content-center w-100">
        <span class="name mt-3"
          ><strong>Name: </strong>{{ student.studentName }}</span
        >
        <span class="name mt-3"
          ><strong>Last Name: </strong>{{ student.studentLastName }}</span
        >
        <span class="name mt-3"
          ><strong>Age: </strong>{{ student.studentAge }}</span
        >
      </div>
      <RouterLink
        to="/"
        class="routerlink btn buttonStyle text-dark fs-5 mt-4 bg-secondary-subtle fw-bold border border-black w-100"
        >Log Out</RouterLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.buttonStyle {
  transition: all 0.3s ease;
}

.buttonStyle:hover {
  background-color: #3b3b3b;
  color: white;
  transform: scale(1.05);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
