<template>
    <div  v-if="searchedRecomendedFiles.length>0 || searchedFolders.length>0 || searchedFiles.length>0" class="content-area">
            <div v-if="searchedRecomendedFiles.length>0" class="recomendations">
                <div class="rec-title">
                    Рекомендуемое
                </div>
                <div class="files">
                    <File v-for="file in searchedRecomendedFiles" v-bind:file="file"></File>
                </div>
            </div>

            <div class="fold"> 
                <div class="fold-title">
                    Папки
                </div>
                <div class="folders">
                    <Folder v-for="folder in searchedFolders" v-bind:folder="folder"></Folder>
                </div>
            </div>

            <div class="all-files">
                <div class="files-title">
                    Файлы
                </div>
                <div class="files">
                    <File v-for="file in searchedFiles" v-bind:file="file"></File>
                </div>
            </div>
    </div>
    <h2 v-else>Не найдено</h2>
</template>

<script>
import { jsonRec } from '../assets/recomended_files.js';
import { jsonFold } from '../assets/folders.js';
import { jsonFile } from '../assets/files.js';
import File from './File.vue';
import Folder from './Folder.vue';

export default {
    components: { Folder, File },
    props: {
        searchStr: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            recomendedFiles: jsonRec.recomendedFiles,
            folders: jsonFold.folders,
            files: jsonFile.files
        }
    },
    computed: {
        searchedRecomendedFiles() {
            return this.recomendedFiles.filter(file => file.title.includes(this.searchStr))
        },
        searchedFolders() {
            return this.folders.filter(folder => folder.title.includes(this.searchStr))
        },
        searchedFiles() {
            return this.files.filter(file => file.title.includes(this.searchStr))
        }
    },
}
</script>

<style scoped>


.content-area{
    background-color: white;
    border-radius: 20px;
    margin-top: 10px;
    padding: 50px 20px 10px 20px;
    height: 88vh;
    overflow: auto;
}

.rec-title{
    font-size: 14px;
    font-weight: bold;
}

.files{
    display: flex;
    flex-wrap: wrap;
}

.fold-title{
    font-size: 14px;
    font-weight: bold;
}

.folders{
    display: flex;
    flex-wrap: wrap;
}

.fold{
    margin-top: 15px;
}

.files-title{
    font-size: 14px;
    font-weight: bold;
}
  

.all-files{
    margin-top: 15px;
}

</style>