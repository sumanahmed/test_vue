<template>
  <div>
    <v-client-table 
        v-for="offer in offers"
        :key="offer.id"  
        :columns="columns" 
        :options="options">
    </v-client-table>
  </div>
</template>

<script>    
    export default{
        name: 'Dashboard',
        data() {
            return {
                columns: ['id', 'title', 'image'],
                tableData: [],
                options: {
                    headings: {
                        id: 'ID',
                        title: 'Title',
                        image: 'Image'
                    },
                    sortable: ['id','title', 'image'],
                    filterable: ['title', 'image']
                },
          
                offers: [],
                errors: [],
            }
        },

        mounted(){
            this.getOffers();
        },

        methods:{

            getOffers(){        
                const axios = require('axios');        
                let uri = 'https://api.baymaxbd.com/api/offers?api_token=eVJnVnFOSnI4VHpwY0w4clFKYm5SVGN6RFNUV25LeWV0U2R0elNBZGE4NTVuZDhxVGI1WFN4cld5QmpK5e27e4eb0af29';                         
                axios.get(uri)
                .then(response => {
                    this.offers = response.data;
                }).catch(response => {
                    this.errors = response.data.errors;
                });
            }


        }
    }
</script>