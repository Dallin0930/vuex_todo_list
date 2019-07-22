<template>
    <div>
        <ol>
            <li v-for="(item,index) in checkboxes" v-bind:key="index"  v-bind:class="{checked:item.isChecked}">
                <input v-model="item.isChecked" type="checkbox"/>
                <span @dblclick="edit(item,index)">
                        <span v-if="!item.isEdited">{{item.content}}</span>
                        <input v-model="item.content"  v-else/>
                </span> 
            </li>
        </ol>
    </div>
</template>

<script>
    export default { 
        name: 'itemList',
        data: function () {
            return {
                condition: "all",
            }
        },
        methods: {
            edit: function (item) {
                item.isEdited = true;
                this.$store.commit('updateItem',{item:item});
            }           
        },
        computed: {
            checkboxes: function () {
                if(this.$store.state.condition==='ALL'){
                    return this.$store.state.checkboxes;
                }else if (this.$store.state.condition==='ACTIVE'){
                    return this.$store.state.checkboxes.filter(item=>item.isChecked===false)
                } else {
                    return this.$store.state.checkboxes.filter(item=>item.isChecked===true)
                }
            }
        }
    }
</script>
<style>
</style>