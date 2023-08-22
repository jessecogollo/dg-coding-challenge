<template>
  <div
    :class="{
      'opacity-50': props.disabled,
    }"
  >
    <div
      class="border-solid border-2 border-gray-200 rounded-lg p-5 h-48 min-h-full"
    >
      <div class="pb-2">
        <Toogle
          :title="title"
          :has-icon="false"
          :disabled="props.disabled"
          :status="status"
          @toogle-value="$emit('cardToggleValue', $event)"
        />
      </div>
      <p class="w-4/5 dg-body">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    title: String,
    default: "Plugin X",
  },
  description: {
    title: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus mattis magna id suscipit.",
  },
  status: {
    title: Boolean,
    default: true,
  },
  disabled: {
    title: String,
    default: false,
  },
});

defineEmits(["cardToggleValue"]);
</script>
