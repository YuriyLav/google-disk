<template>
    <div class="search">
        <form class="form" action="submit">
            <button class="btn">
                <img src="@/assets/search.png" alt="">
            </button>
            <input class="input" type="text" placeholder="Поиск на Диске">
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.input{
    width: 100%;
    height: 30px;
    border: none;
    background-color: #edf2fc;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
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