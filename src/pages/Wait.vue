<template lang="html">
    <div class="container">
        <div class="content">
            <h1>Сайт будет доступен</h1>
            <p class="date">с 10 апреля</p>
            <p class="coming-soon">Готовимся к запуску</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f0f4f8;
    color: #1a365d;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    text-align: center;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 90%;
}

h1 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #2c5282;
}

.date {
    font-size: 1.5rem;
    font-weight: bold;
    color: #3182ce;
    margin-bottom: 20px;
}

.coming-soon {
    font-size: 1rem;
    color: #4a5568;
}

@media (max-width: 480px) {
    h1 {
        font-size: 1.5rem;
    }
    
    .date {
        font-size: 1.2rem;
    }
}


</style>