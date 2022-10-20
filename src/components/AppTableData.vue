<template>
  <div class="bg-white">
    <div class="overflow-x-auto h-72 rounded-lg m-2 p-[0.3px] max-w-screen-xl">
      <table class="table-auto w-full">
        <thead class="sticky top-0">
          <tr class="bg-gray-100">
            <th class="text-center p-4 font-medium">Origen</th>
            <th class="text-center p-4 font-medium">Destinatario</th>
            <th class="text-center p-4 font-medium">Telefono</th>
            <th class="text-center p-4 font-medium">Direccion</th>
            <th class="text-center p-4 font-medium">Estado</th>
            <th class="text-center p-4 font-medium">Fecha de Entrega</th>
            <th class="text-center p-4 font-medium">Historico</th>
            <th class="text-center p-4 font-medium">Archivo</th>
          </tr>
        </thead>
        <tbody class="overflow-y-auto overflow-x-auto">
          <tr
            v-for="(data, i) in dataGuia"
            :key="i"
            class="border-b hover:bg-gray-50"
          >
            <td class="p-4 text-center border-l-[0.5px] border-r-[0.5px]">
              {{ data.origen }}
            </td>
            <td class="p-4 text-center border-r-[0.5px]">
              {{ data.destinatario }}
            </td>
            <td class="p-4 text-center border-r-[0.5px]">
              {{ data.telefono }}
            </td>
            <td class="p-4 text-center border-r-[0.5px]">
              {{ data.direccion }}
            </td>
            <td class="p-4 text-center border-r-[0.5px]">{{ data.estado }}</td>
            <td class="p-4 text-center border-r-[0.5px]">
              {{ data.dsfechaentrega }}
            </td>
            <td class="p-4 text-center text-sky-700 border-r-[0.5px]">
              <button type="button" @click.prevent="openModal(data.historicos)">
                Ver
              </button>
            </td>
            <td class="p-4 text-center border-r-[0.5px] text-sky-700">
              <a :href="`${data.rutadigitalizada}`" target="_blank"
                >Guía digitalizada</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <AppModal
    v-if="isShowModal"
    :dataHistoric="dataHistoric"
    @close="closeModal"
  />
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import AppModal from "../components/AppModal.vue";
import { Guide, GuideHistoric } from "../types/GuideType";

export default defineComponent({
  components: {
    AppModal,
  },
  props: {
    dataGuia: {
      type: Object as PropType<Guide[]>,
      required: true,
    },
  },
  setup() {
    const isShowModal = ref(false);
    const dataHistoric = ref<GuideHistoric[]>([]);
    const openModal = (historic: any) => {
      isShowModal.value = true;
      dataHistoric.value = historic;
    };
    const closeModal = (value: any) => {
      isShowModal.value = value;
    };
    return { isShowModal, closeModal, openModal, dataHistoric };
  },
});
</script>

<style scoped></style>
