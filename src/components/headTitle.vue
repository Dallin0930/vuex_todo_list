<template>
        <div>
            <div>
                <h2>Jquery To Do List</h2>
                <p><em>Simple Todo List with adding and filter by diff status.</em></p>
            </div>
            
            <div>
                <input class="input-text" v-model="item.content" type="text" name="ListItem">
                <div id="button" @click="add">Add</div>
            </div>
            <br>
        </div>
</template>


<script>
    export default {
        name: 'Header',
        data: function () {
            return {
                item: {},
            }
        },
        methods: {
            add: function () {
                if (this.item.content) {
                    this.$store.commit('add',{id:this.$store.state.checkboxes.length+1,
                                                content:this.item.content,
                                                isChecked:false,
                                                isEdited:false});
                    this.item = {};
                }
            }
        }
    }
</script>
<style>

</style>