<script lang="ts">
    import { getTeamUrl } from './utils';  
    export let team: string;
    
    export let selected: boolean;
</script>


<div class="square">

    <div class="background">

    </div>

    <img src='https://draftgameassets.netlify.app/{team}.png'/>
</div>

<style>
	.square {
		display: flex;
        height: 100%;
	 
	}
	.background{
		background: white;
		border: 0.5em solid #eee;
		transform: rotateY(180deg);
		backface-visibility: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 1em;
	}

	img {
        width: 40%;
	}


</style>
