<template>
    <div class="d-flex align-items-center p-3">
        <div class="spinner-border text-primary spinner-border-sm me-2" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>{{ title }}...
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String },
})

</script>

<style></style>