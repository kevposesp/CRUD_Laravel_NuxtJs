<template>
    <div class="mt-5 container">
        <div class="card">
            <div class="card-header">
                <h4>Edit Table
                    <NuxtLink to="/tables" class="btn btn-danger float-end">Back</NuxtLink>
                </h4>
            </div>

            <div class="card-body">
                <div v-if="load.isLoading">
                    <Loading :title="load.isLoadingTitle" />
                </div>
                <div v-else>
                    <form @submit.prevent="saveTable">
                        <div class="form-group">
                            <label for="number_table">Número de Mesa:</label>
                            <input type="number" class="form-control" id="number_table" name="number_table"
                                v-model="formTable.number_table" required>
                        </div>
                        <div class="form-group">
                            <label for="capacity_table">Capacidad de Mesa:</label>
                            <input type="number" class="form-control" id="capacity_table" name="capacity_table"
                                v-model="formTable.capacity_table" required>
                        </div>
                        <div class="form-group">
                            <label for="status_table">Estado de Mesa:</label>
                            <select class="form-control" id="status_table" name="status_table"
                                v-model="formTable.status_table" required>
                                <option value="available">Disponible</option>
                                <option value="occupied">Ocupada</option>
                            </select>
                        </div>
                        <button type="submit" class="mt-3 btn btn-primary">Guardar Mesa</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue';
import { useTablesStore } from '@/stores/tables'
import { useRouter, useRoute } from 'vue-router'
const store = useTablesStore()
const router = useRouter()
const route = useRoute()

let table = await store.getTable(route.params.id)

const formTable = reactive({
    number_table: table.number_table,
    capacity_table: table.capacity_table,
    status_table: table.status_table
})



const load = reactive({
    isLoading: false,
    isLoadingTitle: "Loading"
})

function retVal(data) {
    return {
        id: route.params.id,
        number_table: data.number_table,
        capacity_table: data.capacity_table,
        status_table: data.status_table
    }
}

const saveTable = async () => {
    load.isLoading = true
    load.isLoadingTitle = "Saving"
    store.updateTable(retVal(formTable)).then((res) => {
        load.isLoading = false
        load.isLoadingTitle = "Loading"
        router.push({ path: '/tables' })
    })

}

</script>

<style></style>