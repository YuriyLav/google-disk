<template>
    <div class="all-files">
        <div class="files-title">
            Файлы
        </div>
        <div class="files">
            <ListFiles v-for="list in files" v-bind:list="list"></ListFiles>
        </div>
    </div>
</template>

<script>
import ListFiles from './ListFiles.vue'
import { json } from '../assets/files.js';
export default {
    components: { File, ListFiles },
    data() {
        return {
            files: json.files
        }
    },
}
</script>

<style>
.files-title{
    font-size: 14px;
    font-weight: bold;
}

.files{
    display: flex;
    flex-direction: column;
}   

.all-files{
    margin-top: 15px;
}
</style>