<template>
    <div class="recomendations">
        <div class="rec-title">
            Рекомендуемое
        </div>
        <div class="files">
            <ListFiles v-for="list in recomendedFiles" v-bind:list="list"></ListFiles>
        </div>
    </div>
</template>

<script>
import ListFiles from './ListFiles.vue'
import { json } from '../assets/recomended_files.js';
export default {
    components: { File, ListFiles },
    data() {
        return {
            recomendedFiles: json.recomendedFiles
        }
    },
}
</script>

<style scoped>
.rec-title{
    font-size: 14px;
    font-weight: bold;
}

.files{
    display: flex;
    flex-direction: column;
}
</style>