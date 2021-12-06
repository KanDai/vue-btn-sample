<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  emits: ["click"],
};
</script>

<template>
  <button type="button" class="btn" @click="$emit('click')">{{ label }}</button>
</template>