<template>
    <div class="files">
        <File v-for="file in files" v-bind:file="file"></File>
    </div>
</template>

<script>
import File from '@/components/File.vue';
import { jsonFile } from '../assets/files.js';
export default {
    components: { File },
    data() {
        return {
            files: jsonFile.files
        }
    }
}
</script>

<style scoped>
.file {
    background-color: #edf2fc;
    width: 220px;
    height: 200px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    margin-right: 20px;
    cursor: pointer;
}

.files{
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
}

.file:hover {
    background-color: #cdcdcdc4;
}

.img {
    margin-top: 30px;
}

.file-title {
    font-size: 14px;
    font-weight: bold;
}

</style>