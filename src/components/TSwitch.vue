<template>
  <SwitchGroup as="div" class="flex items-center space-x-4">
    <SwitchLabel><slot /></SwitchLabel>
    <Switch
      as="button"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      class="
        bg-gray-200
        relative
        inline-flex
        flex-shrink-0
        h-6
        w-11
        border-2 border-transparent
        rounded-full
        cursor-pointer
        transition-colors
        ease-in-out
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
      :class="modelValue ? 'bg-blue-600' : 'bg-gray-200'"
      v-slot="{ checked }"
    >
      <span
        class="
          pointer-events-none
          inline-block
          h-5
          w-5
          rounded-full
          bg-white
          shadow
          transform
          ring-0
          transition
          ease-in-out
          duration-200
        "
        :class="{ 'translate-x-5': checked, 'translate-x-0': !checked }"
      />
    </Switch>
  </SwitchGroup>
</template>

<script>
import { SwitchGroup, Switch, SwitchLabel } from "@headlessui/vue";

export default {
  name: "TSwitch",
  emits: ["update:modelValue"],
  components: {
    SwitchGroup,
    Switch,
    SwitchLabel,
  },
  props: { modelValue: Boolean },
};
</script>
