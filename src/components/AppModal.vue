<template>
  <div
    class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"
  >
    <div class="bg-white px-16 py-14 text-center">
      <h1 class="text-xl mb-4 font-bold text-slate-500">Historico</h1>
      <div class="bg-white">
        <div class="h-[200px] overflow-auto p-[0.2px] rounded-lg">
          <table class="table-auto w-full">
            <thead class="border-b sticky top-0">
              <tr class="bg-gray-100">
                <th class="text-center p-4 font-medium">Estado</th>
                <th class="text-center p-4 font-medium">Fecha Mostrar</th>
                <th class="text-center p-4 font-medium">Descripcion</th>
                <th class="text-center p-4 font-medium">Aclaracion</th>
                <th class="text-center p-4 font-medium">Novedad</th>
              </tr>
            </thead>
            <tbody v-if="dataHistoric.length > 0" class="h-96 overflow-y-auto">
              <tr
                v-for="(data, i) in dataHistoric"
                :key="i"
                class="border-b hover:bg-gray-50"
              >
                <td class="p-4 text-center border-r-2">{{ data.estado }}</td>
                <td class="p-4 text-center border-r-2">
                  {{ data.fechamostrar }}
                </td>
                <td class="p-4 text-center border-r-2">
                  {{ data.descripcion }}
                </td>
                <td class="p-4 text-center border-r-2">
                  {{ data.aclaracion }}
                </td>
                <td class="p-4 text-center border-r-2">{{ data.novedad }}</td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td></td>
                <td></td>
                <td class="text-slate-700 text-lg">No hay Datos Encontrados</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        @click.prevent="close"
        class="bg-red-600 px-7 py-2 ml-2 mt-2 rounded-md text-md text-white font-semibold"
      >
        Cerrar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { GuideHistoric } from "../types/GuideType";

export default defineComponent({
  props: {
    dataHistoric: {
      type: Object as PropType<GuideHistoric[]>,
      required: true,
    },
  },
  emits: ["close"],
  setup(_, { emit }) {
    const close = () => {
      emit("close", false);
    };
    return { close };
  },
});
</script>
