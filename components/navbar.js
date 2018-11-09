let navbarTemplate = `<div id="navbarContainer">
    <nav class="navbar navbar-expand-md navbar-light bg-light">

        <a class="navbar-brand" @click.prevent="changeView('main')" href="">Blocks App</a>

        <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="nav-bar collapse navbar-collapse" id="collapsibleNavId">
            <ul class="nav-bar navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="" @click.prevent="changeView('main')">Home <span class="sr-only">(current)</span></a>
                </li>
              
                <a class="nav-link" @click.prevent="toggleUpload()" href="">Upload Song</a>
            </li>
            </ul>
            
        </div> 
        <div style="margin-right:30px;">
          <h2>Blocks</h2>
        </div>
        <div>
          <img src="./assets/blocks-logo.png">
        </div>
    </nav>
</div>`

Vue.component('navbar-component', {

    template : navbarTemplate,
    props: ['changeView','toggleUpload'],
    data: {
      searchSong: ''
    },
    created() {

    },
    computed: {
      
    },
    methods: {
      
    },
    watch: {

    }

})