<template>
  <div>

    <pre>
      {{ $config }}
    </pre> 

    <VTooltip>

      <a>Sponsor me</a>

      <template #popper>
        Help me fund my Open Source work!

      </template>
    
    </VTooltip>

    <pre>
      {{ $store.state.user }}
    </pre>

    <pre>
      {{ user }}
    </pre>

  </div>
</template>

<script>

import { mapState } from "vuex"
export default {
  name: 'IndexPage',

  mounted() {
    console.log(this.$name("bebete"))
    console.log(this.$dayjs().format())

  },

  // only on client side
  created() {
    console.log("created", this.$config)
  },

  asyncDate( { $config }){
    console.log("asyncData", this.$config)
  },

  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>
