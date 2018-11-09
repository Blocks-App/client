let audioPlayTemplate = `
<div id="audioPlayContainer">
    <h1>haiiiii</h1>
    <button type="button" @click="changeView('main')" class="btn btn-primary">Home</button>
</div>   
`

Vue.component('audio-play-component', {

    template : audioPlayTemplate,
    // props: ['changeView'],
    data() {
        return {
            message: 'Audio Play'
        }
    },
    created() {

    },
    methods: {

    },
    watch: {

    }

})