<script>
import ButtonA from "../ui/ButtonA";
import ButtonB from "../ui/ButtonB";

export default {
  components: {
    ButtonA,
    ButtonB,
  },
};
</script>

<template>
  <div>
    <h1>ページ２</h1>
    <ButtonA label="ページ1へ" @click="() => $router.push('/')" />
    <ButtonB label="ページ1へ" href="/" @click="() => $router.push('/')" />
  </div>
</template>