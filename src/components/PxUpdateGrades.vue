<template>
  <div
    class="teacherData d-flex align-items-center me-3 p-4 shadow border border-black rounded"
  >
    <form v-on:submit.prevent="" class="d-flex align-items-center flex-column">
      <label for="searchStudent" class="form-label fw-bold"
        >Student name:</label
      >
      <input
        type="text"
        name="searchStudent"
        id="searchStudent"
        class="form-control mb-4 mt-2"
      />
      <button
        type="submit"
        class="btn buttonStyle text-dark fs-5 bg-secondary-subtle fw-bold border border-black"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script></script>

<style scoped>
.teacherData {
  background-color: #ffffff;
}
</style>
