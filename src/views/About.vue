<template>
  <div class="recipebook">
    <!-- <h1>Recipes</h1> -->
    <viewrecipes></viewrecipes>
  </div>
</template>

<script>
// @ is an alias to /src
import viewrecipes from '@/components/viewrecipes.vue'

export default {
  name: 'recipes',
  components: {
    viewrecipes
  }
}
</script>
