<script setup lang="ts">

</script>
<template>

    <header>
        <div class="mx-auto container px-5 py-16">
            <div></div>
            <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">

                <div class="space-y-4">
                    <label class="block text-white uppercase font-extrabold text-lg" for="ingrediente">Nombre o Ingrediente</label>
                    <input id="ingrediente" type="text" class="p-3 w-full rounded-lg focus:outline-none" placeholder="Nombre o Ingrediente: ej. Vodka, Tequila, etc">
                </div>

                <div class="space-y-4">
                    <label class="block text-white uppercase font-extrabold text-lg" for="categoria">Categoria</label>
                    <select id="categoria" class="p-3 w-full rounded-lg focus:outline-none">
                        <option value="">-- Seleccione --</option>
                    </select>
                </div>

                <input type="submit" class="bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" value="Buscar Recetas">
            </form>


        </div>
    </header>
</template>
