<template>
    <div class="header">
        <div class="search-div">
            <div class="search">
                <form @submit.prevent class="form" action="submit">
                    <button class="btn">
                        <img src="@/assets/search.png" alt="">
                    </button>
                    <input v-model="searchQuery" class="input" type="text" placeholder="Поиск на Диске">
                </form>
            </div>
        </div>
        <div class="header-menu">
            <div class="img-btn"><img src="@/assets/settings-img.png" alt=""></div>
            <div class="img-btn"><img src="@/assets/dots-menu.png" alt=""></div>
            <div class="img-btn"><img src="@/assets/profile-img.png" alt=""></div>
        </div>
    </div>
</template>

<script>
import Profile from './Profile.vue';

export default {
    components: { Profile },
    data() {
        return {
            searchQuery: ""
        };
    },
    watch: {
        searchQuery() {
            this.$emit("search", this.searchQuery);
        }
  }
}
</script>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F5F5F5;
    width: 100%;
    
}

.header-menu{
    display: flex;
    justify-content: space-between;
    width: 140px;
    margin-right: 20px;
}

.img-btn{
    cursor: pointer;
    border-radius: 20px;
    padding: 3px 5px;
}

.img-btn:hover{
    background-color: #cdcdcdc4;
}


.search-div{
    width: 80%;
    min-width: 220px;
}

.input{
    width: 100%;
    height: 30px;
    border: none;
    background-color: #edf2fc;
    border-radius: 30px;
    font-size: 16px;
    outline:none;
    padding: 5px;
}

.form{
    display: flex;
    background-color: #edf2fc;
    border-radius: 30px;
    padding: 10px;
    width: 70%;
}

.btn{
    margin-right: 20px;
    margin-left: 10px;
    border: none;
    background-color: #edf2fc;
    padding: 8px 10px;
    border-radius: 20px;
    cursor: pointer;
}

.btn:hover{
    background-color:#D0D0D0;
}

.search{
    width: 100%;
}

.form:focus{
    background-color: white;
}
</style>