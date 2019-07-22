<template>
    <div id="app">
        <div class="container">
            <headTitle/>
            <itemList/>
            <footButton/>
        </div>
    </div>
</template>
<script>
    import headTitle from "./headTitle";
    import itemList from "./itemList";
    import footButton from './footButton'
    
    export default {
        name: 'todoList',
        components: {headTitle,itemList,footButton},
    }
</script>
<style>
 @import "../assets/css/toDoList.css";
</style>
