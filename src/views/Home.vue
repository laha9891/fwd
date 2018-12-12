<template>
  <div class="home">
  	<addrecipes></addrecipes>
  </div>
</template>

<script>
// @ is an alias to /src
import addrecipes from '@/components/addrecipes.vue'

export default {
  name: 'home',
  components: {
    addrecipes
  }
}
</script>
