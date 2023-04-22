<template>
    <div class="modal" v-if="show" @click="hideModal">
        <div @click.stop class="modal-content">
            <button class="btn">
                <img src="@/assets/add-folder.png" alt="">
                Создать папку
            </button>
            <button class="btn">
                <img src="@/assets/upload-file.png" alt="">
                Загрузить файлы
            </button>
            <button class="btn">
                <img src="@/assets/upload-folder.png" alt="">
                Загрузить папку
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show:{
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideModal() {
            this.$emit('update:show', false)
        }
    },
}
</script>

<style scoped>
.modal{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.modal-content{
    margin: auto;
    background-color: white;
    border-radius: 5px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
}

.btn{
    margin: 10px 0px 10px 0px;
    border: none;
    padding: 8px 10px;
    cursor: pointer;
    background-color: white;
    display: flex;
    align-items: center;
    font-size: 14px;
}

.btn:hover{
    background-color:#D0D0D0;
}

img{
    margin-right: 20px;
}
</style>