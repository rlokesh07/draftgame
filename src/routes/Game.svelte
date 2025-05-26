<script lang="ts">
    import { onMount } from 'svelte';
    import TeamTile from './teamTile.svelte'

    const nflTeams = [
      "49ers", "Bears", "Bengals", "Bills", "Broncos", "Browns", "Buccaneers",
      "Cardinals", "Chargers", "Chiefs", "Colts", "Commanders", "Cowboys",
      "Dolphins", "Eagles", "Falcons", "Giants", "Jaguars", "Jets", "Lions",
      "Packers", "Panthers", "Patriots", "Raiders", "Rams", "Ravens", "Saints",
      "Seahawks", "Steelers", "Texans", "Titans", "Vikings"
    ];
    
    let teamAssignments = {
      qb: nflTeams[Math.floor(Math.random() * 32)],
      rb: nflTeams[Math.floor(Math.random() * 32)],
      wr1: nflTeams[Math.floor(Math.random() * 32)],
      wr2: nflTeams[Math.floor(Math.random() * 32)],
      wr3: nflTeams[Math.floor(Math.random() * 32)],
      te: nflTeams[Math.floor(Math.random() * 32)],
      ol: nflTeams[Math.floor(Math.random() * 32)],
      dp: nflTeams[Math.floor(Math.random() * 32)],
    }; 

    let selected: string[] = [];

    function shuffle(){
        for (let position in teamAssignments) {
            if(!selected.includes(position)){
                teamAssignments[position] = nflTeams[Math.floor(Math.random() * 32)];
            }
        }
    }

    function addToSelected(position: string){
        if (selected.includes(position)) {
            selected = selected.filter(p => p !== position);
        } else {
            selected = [...selected, position];
        }
    }
    onMount(async () => {
        shuffle();
    })
</script>

<div class="header">
    <h1>NFL Fantasy Team Builder</h1>
    <button class="shuffle-btn" on:click={shuffle}>
        🎲 Shuffle Teams
    </button>
</div>

<div class="game">
    <div class="lhs">
        <div id="qb" class="position">
            <div class="position-bg"></div>
            <div class="position-container">
                <h2>QB</h2>
            </div>
            <TeamTile 
                team={teamAssignments['qb']} 
                selected={selected.includes('qb')} 
                on:click={() => addToSelected('qb')}
            />
        </div>
        <div id="rb" class="position">
            <div class="position-bg"></div>
            <div class="position-container">
                <h2>RB</h2>
            </div>
            <TeamTile 
                team={teamAssignments['rb']} 
                selected={selected.includes('rb')} 
                on:click={() => addToSelected('rb')}
            />
        </div>
        <div id="wr1" class="position">
            <div class="position-bg"></div>
            <div class="position-container">
                <h2>WR1</h2>
            </div>
            <TeamTile 
                team={teamAssignments['wr1']} 
                selected={selected.includes('wr1')} 
                on:click={() => addToSelected('wr1')}
            />
        </div>
        <div id="wr2" class="position">
            <div class="position-bg"></div>
            <div class="position-container">
                <h2>WR2</h2>
            </div>
            <TeamTile 
                team={teamAssignments['wr2']} 
                selected={selected.includes('wr2')} 
                on:click={() => addToSelected('wr2')}
            />
        </div>
    </div>
    <div class="rhs">
        <div id="wr3" class="position">
            <div class="position-bg"></div>
            <div class="position-container">
                <h2>WR3</h2>
            </div>
            <TeamTile 
                team={teamAssignments['wr3']} 
                selected={selected.includes('wr3')} 
                on:click={() => addToSelected('wr3')}
            />
        </div>
        <div id="te" class="position">
            <div class="position-bg"></div>
            <div class="position-container">
                <h2>TE</h2>
            </div>
            <TeamTile 
                team={teamAssignments['te']} 
                selected={selected.includes('te')} 
                on:click={() => addToSelected('te')}
            />
        </div>
        <div id="ol" class="position">
            <div class="position-bg"></div>
            <div class="position-container">
                <h2>OL</h2>
            </div>
            <TeamTile 
                team={teamAssignments['ol']} 
                selected={selected.includes('ol')} 
                on:click={() => addToSelected('ol')}
            />
        </div>
        <div id="dp" class="position">
            <div class="position-bg"></div>
            <div class="position-container">
                <h2>DP</h2>
            </div>
            <TeamTile 
                team={teamAssignments['dp']} 
                selected={selected.includes('dp')} 
                on:click={() => addToSelected('dp')}
            />
        </div>
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        color: white;
    }

    .header {
        text-align: center;
        padding: 20px;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
    }

    .header h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .shuffle-btn {
        background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        border: none;
        padding: 15px 30px;
        border-radius: 50px;
        color: white;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        margin-top: 10px;
    }

    .shuffle-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }

    .shuffle-btn:active {
        transform: translateY(0);
    }

    .game {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding: 20px;
        max-width: 1400px;
        margin: 0 auto;
        min-height: calc(100vh - 140px);
    }

    .lhs, .rhs {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .position {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        align-items: center;
        flex: 1;
        border: 2px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .position:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border-color: rgba(255, 255, 255, 0.4);
    }

    .position-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .position h2 {
        font-size: 2.5rem;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        background: linear-gradient(45deg, #ffd700, #ffed4e);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .position-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.1;
        background-size: 100px;
        background-repeat: repeat;
        pointer-events: none;
    }

    @media (max-width: 768px) {
        .game {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 15px;
        }
        
        .position {
            grid-template-columns: 1fr;
            gap: 15px;
            text-align: center;
        }
        
        .position h2 {
            font-size: 2rem;
        }
        
        .header h1 {
            font-size: 2rem;
        }
    }
</style>
