let navbarTemplate = `<div id="navbarContainer">
    <nav class="navbar navbar-expand-md navbar-light bg-light">

        <a class="navbar-brand" @click.prevent="changeView('main')" href="">Blocks App</a>

        <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="" @click.prevent="changeView('main')">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="changeView('audioPlay')" href="">AudioPlay</a>
                </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        
    </nav>
</div>`

Vue.component('navbar-component', {

    template : navbarTemplate,
    props: ['changeView'],
    data() {
        return {
            
        }
    },
    created() {

    },
    methods: {

    },
    watch: {

    }

})