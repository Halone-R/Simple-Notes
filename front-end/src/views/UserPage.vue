<template lang="">
  <div>
    <HeaderComp/>
    <FooterComp/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'UserPage',
  components: {
    HeaderComp,
    FooterComp
    
  }
}
</script>
<style lang="">
  
</style>