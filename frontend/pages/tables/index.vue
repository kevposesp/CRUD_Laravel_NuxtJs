<template>
    <div class="mt-5 container">
        <div class="card">
            <div class="card-header">
                <h4>Tables List
                    <NuxtLink to="/tables/create" class="btn btn-success float-end">Add Table</NuxtLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Number</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in tables" :key="index">
                            <td>{{ item.id }}</td>
                            <td>{{ item.number_table }}</td>
                            <td>{{ item.capacity_table }}</td>
                            <td>{{ item.status_table }}</td>
                            <td>
                                <NuxtLink :to="'/tables/' + item.id + '/edit'" class="btn btn-primary">Edit</NuxtLink>

                                <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                                    :data-bs-target="'#modaldeleteTableId' + item.id">
                                    Delete
                                </button>

                                <div class="modal fade" :id="'modaldeleteTableId' + item.id" tabindex="-1"
                                    data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
                                    :aria-labelledby="'modaldeleteTableTitleId' + item.id" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
                                        role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" :id="'modaldeleteTableTitleId' + item.id">
                                                    Delete table?
                                                </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">Table Nº {{ item.number_table }}</div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                                    @click="deleteTable(item.id)">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTablesStore } from '@/stores/tables'

const store = useTablesStore()

store.getTables()

const tables = computed(() => store.tables)

const deleteTable = (id) => {
    store.deleteTable(id)
}

</script>

<style></style>