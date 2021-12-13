<template>
  <div>
    我是登陆页面
    <h2>{{ $store.state.name }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>

</style>
