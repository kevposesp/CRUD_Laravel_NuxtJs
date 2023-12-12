import laravelApiService from '~/core/http/laravel.api.service';

export const useTablesStore = defineStore('tables', {
    state: () => ({
        _tables: []
    }),
    getters: {
        tables: (state) => state._tables
    },
    actions: {
        async getTables(payload) {
            try {
                const response = await laravelApiService.get('/api/tables');
                this._tables = response.data.tables;
            } catch (error) {
                console.error('Error fetching tables:', error);
            }
        },
        async createTable(payload) {
            try {
                const response = await laravelApiService.post('/api/tables', payload);
                this._tables.push(response.data.table);
                return true
            } catch (error) {
                console.error('Error creating table:', error);
                return false
            }
        },
        async updateTable(payload) {
            try {
                const response = await laravelApiService.put('/api/tables/' + payload.id, payload);
                const index = this._tables.findIndex(table => table.id === payload.id);
                this._tables[index] = response.data.table;
                return true
            } catch (error) {
                console.error('Error updating table:', error);
                return false
            }
        },
        async deleteTable(payload) {
            try {
                const response = await laravelApiService.delete('/api/tables/' + payload);
                const index = this._tables.findIndex(table => table.id === payload);
                this._tables.splice(index, 1);
                return true
            } catch (error) {
                console.error('Error deleting table:', error);
                return false
            }
        },
        async getTable(payload) {
            try {
                const response = await laravelApiService.get('/api/tables/' + payload);
                return response.data.table;
            } catch (error) {
                console.error('Error fetching table:', error);
            }
        },
    }
});
