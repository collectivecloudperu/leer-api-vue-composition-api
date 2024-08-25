<script>
  import { onMounted, reactive } from "vue"
  import { llamarAPI } from "./api"

  export default {
    name: 'App',
    setup() { 

      const data = reactive({
        records: [],
      })

      onMounted( async() => {
        getDatos()
      })

      const getDatos = async() => {
        let url = await llamarAPI('http://localhost:8000/api/v1/postres', 'GET')
        data.records = url
        console.log(data.records)
      }

      return {
        data,
      }

    }
  }
</script>

<template>

  <table>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in data.records" v-bind:key="i">
            <td>{{ item.nombre }}</td>
            <td>{{ item.precio }}</td>
            <td>{{ item.stock }}</td>
          </tr>       
        </tbody>
    </table>
  
</template>

<style scoped>
  /* */
</style>
