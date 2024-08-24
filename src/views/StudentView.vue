<template>
  <div class="container pt-5 d-flex flex-row">
    <px-user-card :student="student"></px-user-card>
    <px-grades-table></px-grades-table>
  </div>
</template>

<script>
import PxGradesTable from "@/components/PxGradesTable.vue";
import PxUserCard from "@/components/PxUserCard.vue";

export default {
  components: { PxGradesTable, PxUserCard },
  computed: {
    student() {
      return this.$store.getters.student;
    },
  },
};
</script>
