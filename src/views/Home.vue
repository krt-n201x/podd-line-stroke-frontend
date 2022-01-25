<template>
  <div class="home">
    <inspectorEdit />
  </div>
</template>

<script>
// @ is an alias to /src
import inspectorEdit from '@/components/inspectorEdit.vue'

export default {
  name: 'Home',
  components: {
    inspectorEdit
  }
}
</script>
