<template>
  <div>
    <div class="editor-menu">
      <button
        id="btn-bold"
        @click="setStyle('bold')"
      >
        <b>B</b>
      </button>
      <button
        id="btn-italic"
        @click="setStyle('italic')"
      >
        <i>I</i>
      </button>
      <button
        id="btn-underline"
        @click="setStyle('underline')"
      >
        <u>U</u>
      </button>
      <button
        id="btn-strike"
        @click="setStyle('strikeThrough')"
      >
        <s>S</s>
      </button>
      <button
        id="btn-ordered-list"
        @click="setStyle('insertOrderedList')"
      >
        OL
      </button>
      <button
        id="btn-unordered-list"
        @click="setStyle('insertUnorderedList')"
      >
        UL
      </button>
      <button
        id="btn-image"
        @click="imgSelectClick()"
      >
        IMG
      </button>
      <input
        id="imgSelector"
        ref="imgSelector"
        type="file"
        accept="image/*"
        @change="selectImageListener($event)"
      >
      <button
        id="align-left"
        @click="setStyle('justifyleft')"
      >
        왼쪽 정렬
      </button>
      <button
        id="align-center"
        @click="setStyle('justifycenter')"
      >
        가운데 정렬
      </button>
      <button
        id="align-right"
        @click="setStyle('justifyright')"
      >
        우측 정렬
      </button>
    </div>
    <div
      id="editor"
      ref="editor"
      contenteditable="true"
    />
    <div
      id="htmlBox"
      ref="htmlBox"
      hidden
    />
    <button @click="convertToHTML()">
      에디터로 보기
    </button>
    <button @click="convertToEditor()">
      HTML로 보기
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"

export default defineComponent({
  setup () {
    const editor = ref(null)
    const htmlBox = ref(null)
    const imgSelector = ref(null)
    onMounted(() => {
    //   DOM 요소는 초기 렌더링 후에 ref에 할당합니다.
    //   console.log(imgSelector.value)
    })

    const setStyle = (style) => {
      document.execCommand(style)
      focusEditor()
    }

    const focusEditor = () => {
      editor.value.focus({ preventScroll: true })
    }

    const convertToHTML = () => {
      htmlBox.value.hidden = true
      editor.value.hidden = false
    }

    const convertToEditor = () => {
      htmlBox.value.innerHTML = editor.value.innerHTML
      htmlBox.value.hidden = false
      editor.value.hidden = true
    }

    const selectImageListener = (event: Event) => {
      const files: Array = event.target.files
      if (files) {
        insertImageDate(files[0])
      }
    }

    const insertImageDate = (file: File) => {
      const reader = new FileReader()
      reader.addEventListener("load", function (e) {
        focusEditor()
        document.execCommand("insertImage", false, `${reader.result}`)
      })
      reader.readAsDataURL(file)
    }

    const imgSelectClick = () => {
      imgSelector.value.click()
    }

    return {
      editor,
      htmlBox,
      imgSelector,
      setStyle,
      focusEditor,
      convertToHTML,
      convertToEditor,
      selectImageListener,
      insertImageDate,
      imgSelectClick
    }
  }
})
</script>

<style scoped>

    #imgSelector {
        display: none;
    }

    #editor img {
        max-width: 100%;
    }

    #htmlBox img {
        max-width: 100%;
    }

</style>
