<template>
    <div class="contador-visitantes gradient">
        <h1 >{{numVisitantes}}</h1>
        <span>Número de visitantes</span>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {

    computed:{
        ...mapState(['numVisitantes'])
    }
}
</script>

<style scoped>
.contador-visitantes{
    position:absolute;
    right: 50px;
    display: block;
    width: 200px;
    text-align: center;
}
.contador-visitantes h1{
    text-align: right;
    color:#d1d1d1
}
.contador-visitantes span{
       color:#6b97f7
}

.gradient {
	background: linear-gradient(334deg, #6b97f7, #7525e2, #f7137e);
	background-size: 180% 180%;
	animation: gradient-animation 6s ease infinite;
}

@keyframes gradient-animation {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


</style>