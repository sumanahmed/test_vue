<template>
    <div>
        <div>
            <button type="button" class="btn btn-success pull-right" @click="showOfferCreateModal">Add New</button> &nbsp;
        </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(offer, index) in offers" :key="offer.id">                    
                    <td>{{ index+1 }}</td>
                    <td>{{ offer.title }}</td>
                    <td v-if="offer.status == 1">On</td>
                    <td v-else>Off</td>
                    <td v-if="offer.type == 1">User</td>
                    <td v-else>Driver</td>
                    <td>
                        <button type="button" class="btn btn-success">Show</button> &nbsp;
                        <button type="button" class="btn btn-warning">Edit</button> &nbsp;
                        <button type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>                
            </tbody>
        </table>

        <div class="modal" tabindex="-1" role="dialog" v-if="offerCreate">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group row">
                            <label for="title" class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                                <input type="email" v-model="list.title" class="form-control" id="title">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="message" class="col-sm-2 col-form-label">Message</label>
                            <div class="col-sm-10">
                                <textarea id="message" v-model="list.message" rows="6" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="status" class="col-sm-2 col-form-label">Status</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="list.status" id="status">
                                    <option value="1">On</option>
                                    <option value="0">Off</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="type" class="col-sm-2 col-form-label">Type</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="list.type" id="type">
                                    <option value="1">User</option>
                                    <option value="2">Driver</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeAddOfferModal">Close</button>
                    <button type="button" class="btn btn-primary" @click="offerStore">Save</button>
                </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
    export default{
        name: 'Dashboard',
        data() {
            return {
                list:{
                    title:'',
                    message:'',
                    status:'',
                    type:'',
                },
                offers: [],
                errors: [],
                offerCreate : false,
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
            },
            showOfferCreateModal(){
                this.offerCreate = true;
            },
            offerStore(){
                const axios = require('axios');        
                let uri = 'https://api.baymaxbd.com/api/offers?api_token=eVJnVnFOSnI4VHpwY0w4clFKYm5SVGN6RFNUV25LeWV0U2R0elNBZGE4NTVuZDhxVGI1WFN4cld5QmpK5e27e4eb0af29';                         
                axios.post(uri, this.list)
                .then(response => {
                    alert(response.data);
                    this.offerCreate = false;
                });
            },
            closeAddOfferModal(){
                this.offerCreate = false;
            }


        }
    }
</script>

<style scoped>
    .modal{
        display: block;
    }
</style>