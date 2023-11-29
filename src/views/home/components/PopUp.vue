<template>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="min-h-screen px-4 text-center">
      <div class="fixed inset-0 bg-black opacity-50" @click="handleClose"></div>
      <div
        class="inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 text-gray-200 shadow-xl rounded-2xl max-w-5xl"
      >
        <div class="absolute top-0 right-0 pt-4 pr-4">
          <button
            class="bg-white dark:bg-gray-700 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
            @click="handleClose"
          >
            <span class="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              class="h-6 w-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <h3 class="text-lg font-bold leading-6 mb-2">{{ title }}</h3>
        <hr />
        <div class="mt-2 overflow-y-auto h-3/5">
          <slot />
        </div>
        <div class="mt-4 flex flex-row-reverse">
          <button
            type="button"
            class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 dark:bg-green-800 text-base font-medium text-white dark:text-gray-100 focus:outline-none ml-3 sm:w-auto sm:text-sm"
            @click="handleClose"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['close'])

const handleClose = () => {
  emits('close')
}
</script>

<style scoped lang="scss"></style>
