<script lang="ts">

    import Game from './Game.svelte'    
    let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = 'waiting'


</script>

<Game></Game>
