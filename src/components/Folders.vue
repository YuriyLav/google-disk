<template>
    <div class="fold"> 
        <div class="fold-title">
            Папки
        </div>
        <div class="folders">
            <Folder v-for="folder in folders" v-bind:folder="folder"></Folder>
        </div>
    </div>
</template>

<script>
import { json } from '../assets/folders.js';
import Folder from './Folder.vue';
export default {
    components: { Folder },
    data() {
        return {
            folders: json.folders
        }
    },
}
</script>

<style scoped>
.fold-title{
    font-size: 14px;
    font-weight: bold;
}

.folders{
    display: flex;
}

.fold{
    margin-top: 15px;
}
</style>