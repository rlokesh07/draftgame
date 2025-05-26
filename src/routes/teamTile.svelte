<script lang="ts">
    import { getTeamUrl } from './utils';  
    export let team: string;
    export let selected: boolean;
    
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    function handleClick() {
        dispatch('click');
    }
</script>

<div class="square" class:selected on:click={handleClick}>
    <div class="background" class:selected-bg={selected}>
        <img src='https://draftgameassets.netlify.app/{team}.png' alt="{team} logo" />
        <div class="team-info">
            <div class="team-name">{team}</div>
            <div class="lock-status">
                {selected ? 'Locked 🔒' : 'Click to lock'}
            </div>
        </div>
        {#if selected}
            <div class="lock-indicator">🔒</div>
        {/if}
    </div>
</div>

<style>
    .square {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
    }
    
    .square:hover {
        transform: scale(1.05);
    }
    
    .square.selected {
        filter: drop-shadow(0 0 15px rgba(50, 205, 50, 0.6));
    }
    
    .background {
        background: linear-gradient(145deg, #ffffff, #f0f0f0);
        border: 0.5em solid #eee;
        width: 100%;
        height: 100%;
        border-radius: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .background:hover {
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
    }
    
    .selected-bg {
        background: linear-gradient(145deg, #32cd32, #228b22) !important;
        border-color: #20b220 !important;
        box-shadow: 0 0 20px rgba(50, 205, 50, 0.4) !important;
    }
    
    .selected-bg:hover {
        box-shadow: 0 0 25px rgba(50, 205, 50, 0.6) !important;
    }
    
    img {
        height: 80px;
        width: 80px;
        object-fit: contain;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
        transition: all 0.3s ease;
        margin-bottom: 10px;
    }
    
    .square:hover img {
        transform: scale(1.1);
    }
    
    .team-info {
        text-align: center;
        width: 100%;
    }
    
    .team-name {
        font-size: 1.1rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .selected .team-name {
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
    
    .lock-status {
        font-size: 0.8rem;
        color: #666;
        font-style: italic;
        opacity: 0.8;
    }
    
    .selected .lock-status {
        color: #e0e0e0;
    }
    
    .lock-indicator {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.2rem;
        opacity: 0.9;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% { opacity: 0.9; }
        50% { opacity: 0.6; }
        100% { opacity: 0.9; }
    }
    
    /* Subtle glow effect for selected state */
    .selected::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #32cd32, #90ee90, #32cd32);
        border-radius: 1.2em;
        z-index: -1;
        opacity: 0.7;
    }
    
    @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
