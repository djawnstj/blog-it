<template>
  <div>
    <form @submit.prevent="onSubmit">
      <InputField
        id="idInput"
        type="text"
        label="ID"
        @get-input="getId"
      />
      <InputField
        id="pwInput"
        type="password"
        label="PW"
        @get-input="getPw"
      />
      <button>login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, provide } from "vue"
import { useRouter } from "vue-router"
import InputField from "../components/InputField.vue"

export default defineComponent({
  name: "LoginView",
  components: {
    InputField
  },
  setup (props) {
    // 라우터 변수
    const router = useRouter()

    // id, pw 변수 초기화
    const inputId = ref("")
    const inputPw = ref("")

    // id 받아오기
    const getId = (value: string) => {
      inputId.value = value
    }
    // pw 받아오기
    const getPw = (value: string) => {
      inputPw.value = value
    }

    // submit 함수
    const onSubmit = () => {
      if (inputId.value === "" || inputPw.value === "") {
        alert("ID 또는 PW를 입력하지 않았습니다.")
        return
      }

      console.log(`submit! id : ${inputId.value}, pw: ${inputPw.value}`)
      router.push({
        name: "blogIt",
        params: {
          id: inputId.value
        }
      })
    }

    return {
      inputId,
      inputPw,
      onSubmit,
      getId,
      getPw
    }
  }
})
</script>

<style scoped>

</style>
