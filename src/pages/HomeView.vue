<template>
  <div class="flex flex-wrap m-2 items-center">
    <div class="flex justify-start">
      <img
        class="flex w-[140px] h-[50px]"
        src="https://aveonline.co/wp-content/uploads/2020/07/avecolor.png"
        alt="aveonline"
      />
    </div>
  </div>

  <div class="flex flex-col justify-center gap-y-4 items-center">
    <h3 class="text-[40px] text-[#656565] text-center">
      RASTREA LA GUIA DE TU PEDIDO
    </h3>
    <input
      v-model="numeroGuia"
      class="w-80 rounded border-2 pl-2"
      :class="error ? 'border-red-600' : ''"
      v-maska="'#*'"
      type="text"
    />

    <span v-if="error" class="text-red-600 text-sm mt-0"> {{ error }}</span>
    <button
      class="border-2 rounded-md p-4 hover:bg-red-600 hover:text-white"
      type="button"
      @click.prevent="getData"
    >
      Buscar
    </button>
  </div>
  <div v-if="datos && !isLoading && !error" class="flex justify-center p-4">
    <AppTableData :dataGuia="datos" />
  </div>
  <TheSpinner :isActive="isLoading" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import AppTableData from "/src/components/AppTableData.vue";
import TheSpinner from "/src/components/TheSpinner.vue";
import { getGuide } from "../services/guides";
import { maska } from "maska";
export default defineComponent({
  directives: { maska },
  components: {
    AppTableData,
    TheSpinner,
  },
  setup() {
    const isLoading = ref(false);
    const error = ref<any>(null);
    const numeroGuia = ref("");
    const datos = ref();
    const validation = () => {
      if (numeroGuia.value.length === 0) {
        throw "Campo requirerido";
      }
    };
    const getData = async () => {
      try {
        isLoading.value = true;
        error.value = null;
        validation();
        const res = await getGuide(numeroGuia.value);
        if (res.data.type_error === "-99") {
          throw res.data.response;
        }
        datos.value = res.data.response.guias;
      } catch (e) {
        error.value = e;
      } finally {
        isLoading.value = false;
      }
    };
    return {
      datos,
      getData,
      numeroGuia,
      isLoading,
      error,
    };
  },
});
</script>
