<template>
    <!-- <VuePdfEmbed annotation-layer text-layer :source="pdfSource" /> -->
      <iframe class="pdf_viewer" :src="pdfSource"></iframe>
    
</template>

<script setup>
import VuePdfEmbed from 'vue-pdf-embed'
import { ref,computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // 导入 useRoute 钩子

// optional styles
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'


const pdfSource = ref('')
const route = useRoute();
const pdfName = computed(() => route.query.name || '');

onMounted(() => {
  pdfSource.value = `/pdfs/${pdfName.value}`;
})
</script>

<style scoped>
.pdf_viewer{
  background-color: aqua;
  position: absolute;
  top: 0;
  padding: 0;
  left: 0;
  width: 100%;
  height: 99vh; /* 占满整个视口 */
  border: none; /* 去掉默认边框 */
}

</style>
  