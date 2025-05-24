<script lang="ts">
    import TeamTile from './teamTile.svelte'
</script>
<div class="game" >
    <div class="lhs">
        <div id="qb" class="position">
            <div class="position-container">
                <h2>QB</h2>
            </div>
            <TeamTile team="chiefs" selected={false} />
        </div>
        <div id="rb" class="position">
            <div class="position-container">
                <h2>RB</h2>
            </div>
            <TeamTile team="chiefs" selected={false} />
        </div>
        <div id="wr1" class="position">
            <div class="position-container">
                <h2>WR1</h2>
            </div>
            <TeamTile team="chiefs" selected={false} />
        </div>
        <div id="wr2" class="position">
            <div class="position-container">
                <h2>WR2</h2>
            </div>
            <TeamTile team="chiefs" selected={false} />
        </div>
    </div>
    <div class="rhs">
        <div id="wr3" class="position">
            <div class="position-container">
                <h2>WR3</h2>
            </div>
            <TeamTile team="chiefs" selected={false} />
        </div>
        <div id="te" class="position">
            <div class="position-container">
                <h2>TE</h2>
            </div>
            <TeamTile team="chiefs" selected={false} />
        </div>
        <div id="ol" class="position">
            <div class="position-container">
                <h2>OL</h2>
            </div>
            <TeamTile team="chiefs" selected={false} />
        </div>
        <div id="dp" class="position">
            <div class="position-container">
                <h2>DP</h2>
            </div>
            <TeamTile team="chiefs" selected={false} />
        </div>
 
    </div>
</div>

<style>
    .game{
        display: grid;
        grid-template-columns: 50% 50%;
        height: 100vh;
    }
    .lhs{
        background-color: green;
        height: 100%
    }
    .rhs{
        background-color: blue;
        height: 100%
    }
    h2{
        font-size: 40px;
    }
    .position{
        background-color: yellow;
        display: grid;
        grid-template-columns: 50% 50%;
        flex: 1;
 
    }
    .position-container{
        display: flex;
        align-items: center;
        justify-content: center;
        height:100%;    
    }
</style>
