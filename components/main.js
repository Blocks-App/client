let mainTemplate = `
<div class="container-fluid">
    <div class="row">
        <h1>Main view</h1>
    </div>
</div>
`

Vue.component('mainComponent', {
    
    template : mainTemplate,
    props: [],
    data() {
        return {

        }
    },
    created() {
       
    },
    computed: {
      filteredSongs : function () {
        return this.songs.filter(song=>  song.title.toLowerCase().indexOf(this.searchSong.toLowerCase()) > -1)
      }
    },
    methods: {
     
    },
    watch: {
        
    }  
  
  })