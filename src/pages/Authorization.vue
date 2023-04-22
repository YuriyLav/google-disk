<template lang="">
    <div class="main">
        <div class="register">
                <form @submit.prevent="handleSubmit" class="login-form">
                    <div class="img-wrapper">
                        <img src="..\assets\logo.png" alt="" />
                      </div>
                    <h2 class="title">Вход</h2>
       
                  <label for="login">Email</label>
                  <input id="login" type="email"/>
        
                  <label for="pass">Пароль</label>
                  <input id="pass" type="password"/>
                  <div class="button-wrapper">

                    <button type="submit" @click="$router.push('/disk')">Войти</button>
                  </div>
                </form>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.register {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-wrapper {
    text-align: center;
    margin-bottom: 20px;
}

.title {
    margin-bottom: 20px;
}


input {
    border-radius: 3px;
    margin-bottom: 1rem;
    border-color: transparent;
    width: 400px;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
    border: 1px solid gray;
    padding-left: 5px;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    width: 500px;
    border: 1px solid gray;
}


button {
    color: white;
    background-color: #1a73e8;
    padding: 10px 15px;
    text-align: center;
    border-radius: 3px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    border: none;
    font-size: 16px;
    font-weight: bold;
}

button:hover {
    background-color: #438be8;
}

.button-wrapper {
    text-align: center;
}
</style>