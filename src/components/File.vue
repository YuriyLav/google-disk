<template>
    <div class="file" @click="$router.push('/about/'+file.id)">
        <div class="file-title">
            {{ file.title }}
        </div>
        <div class="file-img">
            <img class="img" src="@/assets/pdf-img.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        file: {
            type: Object,
            required: true,
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