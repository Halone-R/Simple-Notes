<template>
  <div class="container">
    <HeaderComp />
    <div class="content">
      <NavComp />
      <SectionComp />
    </div>
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import SectionComp from '@/components/SectionComp.vue'

export default {
  name: 'HomePage',
  components: {HeaderComp, SectionComp, FooterComp}
}

</script>
<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
