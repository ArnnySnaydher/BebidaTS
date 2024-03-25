import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { ref, watch, onMounted } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebidas = useBebidasStore()
    const favoritos = ref([])

    onMounted(()=>{

        favoritos.value = JSON.parse(localStorage.getItem('favoritos') as any) ?? []

    })
    watch(favoritos, () => { 
        sincronizarLocalStorage()
    },{
        deep:true
    }
    
    )
    function sincronizarLocalStorage() {
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value))
    }

   

    function existeFavorito(id){
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos') as any) ?? []
        return favoritosLocalStorage.some(favorito => favorito.idDrink=== id)
    }

    function handleClickFavorito() {
        if(existeFavorito(bebidas.receta.idDrink)){
            console.log('Ya existe...')
        }else{
            favoritos.value.push(bebidas.receta)
        }
    }


    return {
        favoritos,
        handleClickFavorito,
        sincronizarLocalStorage,
        existeFavorito
    }
})