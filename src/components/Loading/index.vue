<template>
    <div class="container">
        <div class="loading">
            <!-- "Loading..." -->
            <h2>
            <div>L</div><div>O</div><div>A</div><div>D</div><div>I</div><div>N</div><div>G</div><div>.</div><div>.</div><div>.</div>
            </h2>
            <br>
            <!--
            <div id="rects">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
            -->
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
// Feel free to change those
//
$divs: 10;    // Number of letters/divs
$spintime: 4;    // Time for 1 spin
$delay: 1.25;    // Delay between the letters (not in seconds)

@mixin animation($animate...) {
    $max: length($animate);
    $animations: '';

    @for $i from 1 through $max {
        $animations: #{$animations + nth($animate, $i)};

        @if $i < $max {
            $animations: #{$animations + ", "};
        }
    }
    -webkit-animation: $animations;
    -moz-animation:    $animations;
    -o-animation:      $animations;
    animation:         $animations;
}
@mixin keyframes($animationName) {
    @-webkit-keyframes #{$animationName} {
        @content;
    }
    @-moz-keyframes #{$animationName} {
        @content;
    }
    @-o-keyframes #{$animationName} {
        @content;
    }
    @keyframes #{$animationName} {
        @content;
    }
}
@mixin transform($transform) {
  -webkit-transform: $transform;
  -moz-transform: $transform;
  transform: $transform;
}

.container {
  position: absolute;
  left: 0;
  top: calc(50% - 100px);
  width: 100%;
  height: 100px;
}
.loading {
  
  h2 {
    padding: 0;
    margin: 0;
    text-align: center;
    font-family: Verdana;
    font-size: 8vw;
  }
  #rects {
    position: absolute;
    left: calc(50% - 7*30px);
    div {
      width: 60px;
      height: 60px;
      background-color: green;
    }
  }
}
.loading * div {
  display: inline-block;
}

@for $current from 1 through $divs {
  .loading * div:nth-child(#{$current}) {
   // background: adjust-hue(blue, $current*20);
    @include animation(Spin #{$spintime}s #{($current * $delay)/($divs+$spintime)}s infinite);

  }
  .loading #rects div:nth-child(#{$current}) {
    background: adjust-hue(blue, $current*-20);
  }
}
@include keyframes(Spin) {
  0%, 25%   {}
  50%       {transform: rotateY(360deg);}
  100%      {}  
}
</style>
