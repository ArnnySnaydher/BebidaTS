import api from "@/lib/axios";

export default{
    obtenerCategorias(){
        return api('/list.php?c=list')
    },
    buscarRecetas({categoria,nombre}: {categoria:String, nombre:String}){
        return api(`/filter.php?c=${categoria}&i=${nombre}`)
    },
    buscarReceta(id:Number){
        return api(`/lookup.php?i=${id}`)
    }
}