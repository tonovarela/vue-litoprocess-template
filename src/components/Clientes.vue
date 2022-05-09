<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <DataTable
          :value="storeClientes.clientes"
          v-model:selection="selectedCustomers"
          :paginator="true"
          class="p-datatable-gridlines"
          :rows="10"
          dataKey="id_solicitud"
          :rowHover="true"
          filterDisplay="menu"
          v-model:filters="filters"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rowsPerPageOptions="[10, 25, 50]"
          currentPageReportTemplate="{first} de {last} de {totalRecords} clientes"
          :loading="storeClientes.cargando"
          :globalFilterFields="['contacto']"
          responsiveLayout="scroll"
        >
          <template #empty> Sin registros </template>
          <template #loading>
            Cargando información por favor espere..
          </template>
          <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
          <Column
            field="contacto"
            header="Contacto"
            filterField="contacto"
            sortable
            sortField="contacto"
            :showFilterMatchModes="false"
            :filterMenuStyle="{ width: '20rem' }"
            style="min-width: 14rem"
          >
            <template #filter="{ filterModel }">
              <div class="mb-3 font-bold">Agent Picker</div>
              <MultiSelect
                v-model="filterModel.value"
                :options="representatives"
                optionLabel="contacto"
                placeholder="Buscar vendedor"
                class="p-column-filter"
              >
                <template #option="slotProps">
                  <div class="p-multiselect-representative-option">
                    <img
                      :alt="slotProps.option.contacto"
                      src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                      width="32"
                      style="vertical-align: middle"
                    />
                    <span class="image-text">{{
                      slotProps.option.contacto
                    }}</span>
                  </div>
                </template>
              </MultiSelect>
            </template>
          </Column>
          <Column sortable field="nombreCliente" header="Cliente"> </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import { useGeneralStore } from "@/store/General";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { useClientesStore } from "@/store/Clientes";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const store = useGeneralStore();
    const storeClientes = useClientesStore();
    const filters = ref({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            contacto: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
            }            
        });

    onMounted(async () => {
      await storeClientes.cargarClientes();      
    });

    const selectedCustomers = ref([]);    
    const representatives = [
      { contacto: "JESSICA BALTAZAR" },
      { contacto: "MARCO ESTELLES" },
    ];

    return {
      store,
      storeClientes,
      filters,
      representatives,
      selectedCustomers,
    };
  },
  created() {
    //console.log("dddd");

    //this.initFilters1();
  },
  data() {
    return {
    //  filters: {},
    };
  },
  methods: {},
};
</script>
