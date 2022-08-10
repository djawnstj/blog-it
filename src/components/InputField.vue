<template>
  <div>
    <label
      v-if="label"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="modelValue"
      :type="type"
      @input="onEmit"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"

export default defineComponent({
  name: "InputField",
  props: {
    id: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  emits: ["get-input"],
  setup (props, { emit }) {
    // input 상자에서 값 받아올 value 초기화
    const modelValue = ref(props.value)

    // 부모에게 값 전달해줄 함수
    const onEmit = () => {
      emit("get-input", modelValue.value)
    }
    return {
      modelValue,
      onEmit
    }
  }
})
</script>

<style scoped>

</style>
