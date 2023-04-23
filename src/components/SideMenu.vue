<template>
    <div class="side-menu">
        <div class="logo">
            <img class="img" src="@/assets/logo.png" alt="">
            <div class="title">Диск</div>
        </div>
        <button @click="showModal" class="create-btn"><b style="font-size: 35px; margin-right: 15px;">+</b>Создать</button>
        <Create v-model:show=modalVisible></Create>
        <div v-for="menuItem in menuItems">
            <button class="menu-item-btn">
                <div class="menu-item-img">
                    <img src="@/assets/item.png" alt="">
                </div>
                <div class="menu-item-title">
                    {{ menuItem.title }}
                </div>
            </button>
        </div>
        <div class="memory-load">
            <progress value="67" max="100"></progress>
            <div class="load">Использовано 10,1 ГБ из <br> 15 ГБ</div>
        </div>
        <button class="buy-more">Купить больше места</button>
    </div>
</template>

<script>
import Create from './Create.vue';


export default {
    data() {
        return {
            menuItems: [
                { title: "Мой диск" },
                { title: "Компьютеры" },
                { title: "Доступные мне" },
                { title: "Недавние" },
                { title: "Помеченные" },
                { title: "Корзина" },
                { title: "Хранилище" },
            ],
            modalVisible: false
        };
    },
    methods: {
        showModal() {
            this.modalVisible = true
        }
    },
    components: { Create }
}
</script>

<style scoped>
.side-menu {
    width: 15%;
    height: 100vh;
    padding: 10px 0px 0px 20px;
}

.menu-item-btn {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    font-size: 14px;
    margin-top: 5px;
    border: none;
    background: none;
    cursor: pointer;
    padding: 5px 20px 5px 20px;
    border-radius: 20px;
}

.menu-item-btn:hover{
    background-color: #D0D0D0;
}

.menu-item-btn:focus{
    background-color: #88ccff;
}

.menu-item-img{
    margin-right: 12px;
}

.create-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5);
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    background-color: white;
    cursor: pointer;
    margin: 20px 0px;
}

.create-btn:hover {
    background-color: #F0F0F0;
}

.logo {
    display: flex;
    align-items: center;
    padding-left: 10px;
}

.img {
    margin-right: 10px;
    cursor: pointer;
    cursor: pointer;
}

.title {
    font-size: 22px;

    color: #404040;
    cursor: pointer;
}

progress {
    background-color: gray;
    border-radius: 5px;
    border: 0;
    height: 5px;
    width: 180px;
}

progress::-webkit-progress-bar {
    background-color: gray;
    border-radius: 5px;
}

progress::-webkit-progress-value {
    background-color: rgb(7, 145, 243);
    border-radius: 5px;
}

.memory-load {
    margin-left: 20px;
}

.load {
    margin-top: 10px;
    font-size: 14px;
}

.buy-more {
    margin-top: 20px;
    margin-left: 10px;
    width: 85%;
    padding: 10px 0px;
    color: rgb(7, 145, 243);
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    border: 1px solid black;
    background-color: #F5F5F5;
}

.buy-more:hover {
    background-color: #E8E8E8;
}

@media (max-width: 768px) { 
    .side-menu
    {
        display: none;
    }
}


</style>