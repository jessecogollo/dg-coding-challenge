<template>
  <div>
    <SwitchGroup as="div" class="flex items-center justify-between pb-1">
      <span class="flex flex-grow flex-col">
        <SwitchLabel
          as="span"
          :class="`${hasIcon ? 'dg-body text-grey-darken-1' : 'dg-subtitle'}`"
          passive
          >{{ title }} {{ setTitleComplement }}
        </SwitchLabel>
      </span>
      <div class="grid grid-cols-1">
        <div class="flex justify-center">
          <Switch
            :disabled="disabled"
            v-model="enabled"
            @click="() => $emit('toogleValue', enabled)"
            :class="[
              enabled ? 'bg-green' : 'bg-red',
              hasIcon ? 'h-8 w-11' : 'h-6 w-11',
              'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
            ]"
          >
            <span
              :class="[
                enabled ? 'translate-x-5' : 'translate-x-0',
                hasIcon ? 'h-7 w-7' : 'h-5 w-5',
                enabled && hasIcon ? 'translate-x-2.5' : 'translate-x-0',
                'pointer-events-none relative inline-block transform rounded-full bg-white shadow transition duration-200 ease-in-out',
              ]"
            >
              <span
                :class="[
                  enabled
                    ? 'opacity-0 duration-100 ease-out '
                    : 'opacity-100 duration-200 ease-in ',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                ]"
                aria-hidden="true"
              >
                <IconPower
                  v-if="hasIcon"
                  :classColor="enabled ? '#69C78F' : '#C03644'"
                />
              </span>
              <span
                :class="[
                  enabled
                    ? 'opacity-100 duration-200 ease-in'
                    : 'opacity-0 duration-100 ease-out',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                ]"
                aria-hidden="true"
              >
                <IconPower
                  v-if="hasIcon"
                  :classColor="enabled ? '#69C78F' : '#C03644'"
                />
              </span>
            </span>
          </Switch>
        </div>
      </div>
    </SwitchGroup>
    <div class="flex justify-end">
      <p
        :class="[
          'text-xs',
          'dg-font-bold',
          enabled ? 'text-green' : 'text-red',
        ]"
      >
        {{ setToggleStatusText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const props = defineProps({
  title: {
    title: String,
    required: true,
  },
  hasIcon: {
    type: Boolean,
    default: true,
  },
  hasMessage: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const enabled = ref(props.status);

defineEmits(["toogleValue"]);

const setTitleComplement = computed(() => {
  if (!props.hasIcon) {
    return "";
  }
  if (enabled.value) {
    return "enabled";
  } else {
    return "disabled";
  }
});

const setToggleStatusText = computed(() => {
  if (props.hasIcon) {
    return "";
  }
  if (enabled.value) {
    return "Allowed";
  } else {
    return "Blocked";
  }
});
</script>
