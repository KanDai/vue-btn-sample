<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    const clickLink = (e) => {
      // 左クリック以外 / 同時に特殊キーが押されている場合は通常のaタグの動作を行う
      if (
        (e.button !== undefined && e.button !== 0) ||
        e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        e.shiftKey
      )
        return;

      // 通常の動作をキャンセルしてemitでイベントを送信
      e.preventDefault();
      emit("click");
    };

    return {
      clickLink,
    };
  },
};
</script>

<template>
  <a v-if="href" :href="href" class="btn" @click="clickLink">{{ label }}</a>
  <button v-else type="button" class="btn" @click="$emit('click')">
    {{ label }}
  </button>
</template>
