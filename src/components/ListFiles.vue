<template>
    <div class="list-files">
        <File v-for="file in list" v-bind:file="file"></File>
    </div>
</template>

<script>
import File from './File.vue';
export default {
    components: { File },
    props: {
        list: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
.list-files{
    display: flex;
}
</style>