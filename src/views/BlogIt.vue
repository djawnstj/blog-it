<template>
  <div />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"
import { useRouter } from "vue-router"

export default defineComponent({
  name: "BlogIt",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  setup (props) {
    // 라우터 변수
    const router = useRouter()
    const userId = ref("")

    // 페이지 올라왔을때 호출되는 생명주기
    onMounted(() => {
      userId.value = props.id
      if (userId.value === "") {
        alert("잘못된 접근입니다.")
        router.go(-1)
        return
      }
      console.log("id: ", props.id)
    })

    return {}
  }
})
</script>

<style scoped>

</style>
