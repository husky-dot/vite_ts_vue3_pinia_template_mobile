<template>
  <div v-html="privacyContent" style="margin:20px"></div>
</template>

<script setup lang="ts">
import { getProtocol } from '@/api/app'
import { ref } from 'vue'

const privacyContent = ref('')

const getContent = async () => {
  var domain = window.location.hostname
  console.log(domain)
  if(domain.startsWith('192') || domain=='localhost'){
    domain = "www.slotsrushs.com"
  }
  const data = await getProtocol({domain: domain})
  privacyContent.value = data.privacy
}

getContent()
</script>

<style scoped lang="scss"></style>
