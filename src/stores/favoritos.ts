import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'
import { ref, watch, onMounted ,computed} from 'vue'
import { useModalStore } from './modal'
import { useNotificacionStore } from './notificacion'

export const useFavoritosStore = defineStore('favoritos', () => {
    const bebidas = useBebidasStore()
    const modal = useModalStore()
    const notificaciones = useNotificacionStore()
    const favoritos = ref([])

    onMounted(() => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos') as any) ?? []
    })
    watch(
        favoritos,
        () => {
            sincronizarLocalStorage()
        },
        {
            deep: true
        }
    )
    function sincronizarLocalStorage() {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    function existeFavorito() {
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos') as any) ?? []
        return favoritosLocalStorage.some(favorito => favorito.idDrink === bebidas.receta.idDrink)
    }
    function eliminarFavorito() {
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)
    }
    function agregarFavorito() {
        favoritos.value.push(bebidas.receta)
        notificaciones.mostrar = true
        notificaciones.texto ='Se agrego a favoritos'
    }

    function handleClickFavorito() {
        if (existeFavorito()) {
            eliminarFavorito()
        } else {
            agregarFavorito()

        }
        modal.modal = false
    }

    const noFavoritos = computed(()=>
        favoritos.value.length ===0
    )

    return {
        favoritos,
        handleClickFavorito,
        sincronizarLocalStorage,
        existeFavorito,
        noFavoritos
    }
})
