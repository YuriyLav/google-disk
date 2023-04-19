<template>
    <div class="side-menu">
        <div class="logo">
            <img class="img" src="@/assets/logo.png" alt="">
            <div class="title">Диск</div>
        </div>
        <button class="create-btn"><b style="font-size: 35px; margin-right: 15px;">+</b>Создать</button>
        <div class="menu">
            <MenuItem v-for="menuItem in menuItems" v-bind:menuItem="menuItem"></MenuItem>
        </div>
        <div class="memory-load">
            <progress value="67" max="100"></progress>
            <div class="load">Использовано 10,1 ГБ из <br> 15 ГБ</div>
        </div>
        <button class="buy-more">Купить больше места</button>
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
    components: { MenuItem },
    data() {
        return {
            menuItems: [
                {title: 'Мой диск'},
                {title: 'Компьютеры'},
                {title: 'Доступные мне'},
                {title: 'Недавние'},
                {title: 'Помеченные'},
                {title: 'Корзина'},
                {title: 'Хранилище'},
            ]
        }
    }
}
</script>

<style>
.side-menu{
    width: 250px;
    height: 100%;
    padding: 10px 0px 0px 20px;
    position: fixed;
    top: 0; /* Stay at the top */
    left: 0;
}

.create-btn{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5); 
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    background-color: white;
    cursor: pointer;
    margin: 20px 0px;
}

.create-btn:hover{
    background-color: #F0F0F0;
}

.logo {
    display: flex;
    align-items: center;
    padding-left: 10px;
}

.img{
    margin-right: 10px;
    cursor: pointer;
    cursor: pointer;
}

.title{
    font-size: 22px;
    font-weight: bold;
    color: #404040;
    cursor: pointer;
}

progress {
    background-color:gray;
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

.memory-load{
    margin-left: 20px;
}

.load{
    margin-top: 10px;
    font-size: 14px;
}

.buy-more{
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

.buy-more:hover{
    background-color: #E8E8E8;
}
</style>