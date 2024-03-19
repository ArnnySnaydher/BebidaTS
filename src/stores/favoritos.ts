import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { ref, watch, onMounted } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebidas = useBebidasStore()
    const favoritos = ref([])

    onMounted(()=>{
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })
    watch(favoritos, () => { 
        sincronizarLocalStorage()
    },{
        deep:true
    }
    
    )
    const sincronizarLocalStorage = () => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value))
    }

    const handleClickFavorito = () => {
        favoritos.value.push(bebidas.receta)
    }


    return {
        favoritos,
        handleClickFavorito,
        sincronizarLocalStorage
    }
})