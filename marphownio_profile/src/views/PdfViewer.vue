<template>
    <VuePdfEmbed annotation-layer text-layer :source="pdfSource" />
</template>

<script setup>
import VuePdfEmbed from 'vue-pdf-embed'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // 导入 useRoute 钩子

// optional styles
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'


const pdfSource = ref('')
const route = useRoute();
const pdfName = route.params.pdfName; 

onMounted(() => {
  pdfSource.value = new URL(`../assets/pdfs/${pdfName}`, import.meta.url).href;
})
</script>
  