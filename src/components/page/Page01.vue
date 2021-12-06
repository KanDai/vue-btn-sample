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
    <h1>ページ1</h1>
    <ButtonA label="ページ２へ" @click="() => $router.push('/page02')" />
    <ButtonB
      label="ページ２へ"
      href="/page02"
      @click="() => $router.push('/page02')"
    />
  </div>
</template>