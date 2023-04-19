<template>
    <div class="folder">
        <div class="folder-img">
            <img class="img" src="@/assets/folder-img.png" alt="">
        </div>
        <div class="folder-title">
            {{ folder.title }}
        </div>
        <div class="btn-menu">
            <button class="btn">
                <img src="@/assets/context-menu.png" alt="">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        folder: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.folder{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #edf2fc;
    width: 220px;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 15px;
    margin-right: 20px;
    cursor: pointer;
}

.folder:hover{
    background-color: #cdcdcdc4;
}

.btn{
    border: none;
    all: unset;
    border-radius: 15px;
    padding: 1px 2px;
}

.btn:hover{
    background-color: #a4a4a4c4;
}

.folder-title{
    font-size: 14px;
    font-weight: bold;
}    
</style>