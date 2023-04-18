<template>
    <div>
        <button class="menu-item">
            <div class="menu-item-img">
                <img src="@/assets/item.png" alt="">
            </div>
            <div class="menu-item-title">
                {{ menuItem.title }}
            </div>
        </button>
    </div>
</template>

<script>
export default {    
    props: {
        menuItem: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.menu-item {
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

.menu-item:hover{
    background-color: #D0D0D0;
}

.menu-item:focus{
    background-color: #88ccff;
}

.menu-item-img{
    margin-right: 12px;
}

</style>