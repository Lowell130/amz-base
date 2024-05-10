<template>
<div>
  <p>id product: {{ id }}</p>
</div>
  
</template>

<script setup>
import { useRoute } from "vue-router";
const { id } = useRoute().params




</script>

