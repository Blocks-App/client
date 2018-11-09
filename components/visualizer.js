let visualizerTemplate = `<section>
    <div id="visualizerContainer">
        <ul id='vizlis' class="list-group position-fixed" style="max-height: 500; overflow: auto; background-image: rgba(255, 255, 255, 0.15)">
			<li @click="playthis(song.audioUrl)" v-for="(song,index) in songs" class="list-group-item">{{song.title}}</li>
		</ul>

		<canvas id="canvas"></canvas>
        <br>
		<div v-if="!playing"  id="container_button">
			<div id="hole">
				<div id="button"  @click="playIt()">
					<div id="triangle"></div>
					<div id="lighter_triangle"></div>
					<div id="darker_triangle"></div>
				</div>
			</div>
		</div>
		
	</div>
</section>`

Vue.component('visualizer-component', {

    template: visualizerTemplate,
    props: ['changeView'],
    data() {
        return {
            playing : false,
            file : 'https://dl.dropbox.com/s/oswkgcw749xc8xs/The-Noisy-Freaks.mp3',
            songs : []

        }
    },
    created() {
    this.getAudio()
    },  
    methods: {

        playthis(audioUrl) {
            this.file = audioUrl
        },

        getAudio(){
            axios.get('http://localhost:3000/song', )
            .then((result) => {
                console.log(result.data);
                this.songs = result.data
            }).catch((err) => {
                console.log(err.response);
            });

        },

        playIt () {
            this.playing = true
            let file = document.getElementById("thefile");
            // let audio = document.getElementById("audio");
            let audio = new Audio(this.file);  
            audio.type = 'audio/mp3';
            audio.crossOrigin="anonymous"
            // let files = file.files;
            // audio.src = URL.createObjectURL(files[0]);

            audio.load();
            
            // audio.play();
            let context = new AudioContext();
            let src = context.createMediaElementSource(audio);
            let analyser = context.createAnalyser();
    
            let canvas = document.getElementById("canvas");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - 100;
            
            let ctx = canvas.getContext("2d");
    
            src.connect(analyser);
            analyser.connect(context.destination);
    
            analyser.fftSize = 256;
    
            let bufferLength = analyser.frequencyBinCount;
            console.log(bufferLength);
    
            let dataArray = new Uint8Array(bufferLength);
    
            let WIDTH = canvas.width;
            let HEIGHT = canvas.height;
    
            let barWidth = (WIDTH / bufferLength) * 1;
            let barHeight;
            let x = 0;
    
            function renderFrame() {
                requestAnimationFrame(renderFrame);
    
                x = 0;
    
                analyser.getByteFrequencyData(dataArray);
    
                ctx.fillStyle = "#FFF";
                ctx.fillRect(0, 0, WIDTH, HEIGHT);
    
                for (let i = 0; i < bufferLength; i++) {
                    barHeight = dataArray[i];
    
                    let r = barHeight + (25 * (i / bufferLength));
                    let g = 250 * (i / bufferLength);
                    let b = 100;
    
                    ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    
                    x += barWidth + 1;
                }
            }
    
            audio.play();
            audio.onended = function(){
                this.onDone()
            }
            renderFrame();
            
    
        },

        onDone(){
            console.log('udahan');
            this.playing = false
        }

    },
    watch: {

    }

})