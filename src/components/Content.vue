<template>
    <div class="content-area">
        <div class="content">
            <Recomendations></Recomendations>
            <Folders></Folders>
            <Files></Files>
        </div>
    </div>
</template>

<script>
import Files from './Files.vue';
import Folders from './Folders.vue';
import Recomendations from './Recomendations.vue';

export default {
    components: { Recomendations, Folders, Files }
}
</script>

<style scoped>
.content{

    margin-top: 10px;
    padding: 50px 20px 10px 20px;
}

.content-area{
    background-color: white;
    border-radius: 20px;
}

</style>