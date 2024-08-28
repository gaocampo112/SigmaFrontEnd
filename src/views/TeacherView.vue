<template>
  <div
    class="container pt-5 d-flex flex-row justify-content-center align-items-center"
  >
    <px-user-card :student="student"></px-user-card>
    <px-update-grades></px-update-grades>
  </div>
</template>

<script>
import PxUserCard from "@/components/PxUserCard.vue";
import PxUpdateGrades from "@/components/PxUpdateGrades.vue";
export default {
  components: { PxUserCard, PxUpdateGrades },
  computed: {
    student() {
      return this.$store.getters.student;
    },
  },
};
</script>
