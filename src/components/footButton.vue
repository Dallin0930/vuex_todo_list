<template>
    <div>
         <ul id="filters">
              <li>
                  <a  data-filter="all" @click="filterList('ALL')">ALL</a>
              </li>
              <li> 
                  <a  data-filter="active" @click="filterList('ACTIVE')">Active</a>
              </li>
              <li>
                  <a  data-filter="complete" @click="filterList('COMPLETE')">Complete</a>
              </li>
          </ul>
      
    </div>
</template>
<script>
    export default {
        name: 'footButton',
        data: function () {
            return {}
        },
        methods: {
            filterList(condition) {
                this.$store.commit('show', condition);
            }
        }
    }
</script>
