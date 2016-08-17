<style> 

    * {
        margin: 0;
        padding: 0;
    }
    .body {  
             height:100%; 
             background: #f8f8f8;
             font-family: 'PT Sans', Helvetica, Arial, sans-serif;
             text-align: center;
             color: #fff;
             position: relative;
        }
    img { 
            border:none; 
        }
    #supersized-loader { 
        position: absolute; 
        top: 50%; 
        left: 50%; 
        z-index: 0; 
        width: 60px; 
        height: 60px; 
        margin: -30px 0 0 -30px; 
        text-indent: -999em; 
        background: url(../imgs/progress.gif) no-repeat center center;
     }
    #supersized {  
        display: block; 
        position: fixed; 
        left: 0; 
        top: 0; 
        overflow: hidden; 
        z-index: 1; 
        height: 100%; 
        width: 100%; 
    }
    #supersized img { 
        width: auto; 
        height: auto; 
        position: relative; 
        display: none; 
        outline: none; 
        border: none; }
    #supersized.speed img { 
        -ms-interpolation-mode: nearest-neighbor; 
        image-rendering: -moz-crisp-edges; 
    }   /*Speed*/
    #supersized.quality img { 
        -ms-interpolation-mode: bicubic; 
        image-rendering: optimizeQuality; 
    }           /*Quality*/
    #supersized li { 
        display: block; 
        list-style: none; 
        z-index: -30; 
        position: fixed; 
        overflow: hidden; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background:#111; 
    }
    #supersized a { 
        width: 100%; 
        height: 100%; 
        display: block; 
    }
    #supersized li.prevslide { 
        z-index:-20; 
    }
    #supersized li.activeslide { 
        z-index:-10;
    }
    #supersized li.image-loading { 
        background: #111 url(../imgs/progress.gif) no-repeat center center;
        width: 100%; height:100%; 
    }
    #supersized li.image-loading img{ 
        visibility:hidden; 
    }
    #supersized li.prevslide img, #supersized li.activeslide img{ 
        display:inline; 
    }
    #supersized img { 
        max-width: none !important 
    }
    .page-container {
        position: relative;
        z-index: 2;
        margin: 120px auto 0 auto;
    }

    form {
        position: relative;
        width: 305px;
        margin: 15px auto 0 auto;
        text-align: center;
    }
    input {
        width: 270px;
        height: 42px;
        margin-top: 25px;
        padding: 0 15px;
        background: #2d2d2d; /* browsers that don't support rgba */
        background: rgba(45,45,45,.15);
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
        border: 1px solid #3d3d3d; /* browsers that don't support rgba */
        border: 1px solid rgba(255,255,255,.15);
        -moz-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        -webkit-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #fff;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        -o-transition: all .2s;
        -moz-transition: all .2s;
        -webkit-transition: all .2s;
        -ms-transition: all .2s;
    }

    input:-moz-placeholder { color: #fff; }
    input:-ms-input-placeholder { color: #fff; }
    input::-webkit-input-placeholder { color: #fff; }

    input:focus {
        outline: none;
        -moz-box-shadow:
            0 2px 3px 0 rgba(0,0,0,.1) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
        -webkit-box-shadow:
            0 2px 3px 0 rgba(0,0,0,.1) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
        box-shadow:
            0 2px 3px 0 rgba(0,0,0,.1) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
    }
    #submitBtn {
        font-size: 18px;
    }
    button {
        cursor: pointer;
        width: 150px;
        height: 44px;
        margin-top: 25px;
        padding: 0;
        background: #ef4300;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
        border: 1px solid #ff730e;
        -moz-box-shadow:
            0 15px 30px 0 rgba(255,255,255,.25) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
        -webkit-box-shadow:
            0 15px 30px 0 rgba(255,255,255,.25) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
        box-shadow:
            0 15px 30px 0 rgba(255,255,255,.25) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        -o-transition: all .2s;
        -moz-transition: all .2s;
        -webkit-transition: all .2s;
        -ms-transition: all .2s;
    }

    button:hover {
        -moz-box-shadow:
            0 15px 30px 0 rgba(255,255,255,.15) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
        -webkit-box-shadow:
            0 15px 30px 0 rgba(255,255,255,.15) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
        box-shadow:
            0 15px 30px 0 rgba(255,255,255,.15) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
    }

    button:active {
        -moz-box-shadow:
            0 15px 30px 0 rgba(255,255,255,.15) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
        -webkit-box-shadow:
            0 15px 30px 0 rgba(255,255,255,.15) inset,
            0 2px 7px 0 rgba(0,0,0,.2);
        box-shadow:
            0 5px 8px 0 rgba(0,0,0,.1) inset,
            0 1px 4px 0 rgba(0,0,0,.1);

        border: 0px solid #ef4300;
    }

    .error {
        display: none;
        position: absolute;
        top: 27px;
        right: -55px;
        width: 40px;
        height: 40px;
        background: #2d2d2d; /* browsers that don't support rgba */
        background: rgba(45,45,45,.25);
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
    }

    .error span {
        display: inline-block;
        margin-left: 2px;
        font-size: 40px;
        font-weight: 700;
        line-height: 40px;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        -o-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);

    }
    .connect {
        width: 305px;
        margin: 35px auto 0 auto;
        font-size: 18px;
        font-weight: 700;
        text-shadow: 0 1px 3px rgba(0,0,0,.2);
    }
    .connect a {
        display: inline-block;
        width: 32px;
        height: 35px;
        margin-top: 15px;
        -o-transition: all .2s;
        -moz-transition: all .2s;
        -webkit-transition: all .2s;
        -ms-transition: all .2s;
    }
    .connect a:hover { background-position: center bottom; }
    .tipWrap{
        position:absolute;
        bottom:44px;
        left:0;
        width:100%;
        font-size:12px;
        line-height:25px;
        color:#f00;
        text-align:center;
    }
</style>
<template>
    <div class="body">
        <div class="page-container">
            <form action="" method="post" name="f" id="loginForm" onsubmit="return false;">
                <input type="text" name="user" id="user" class="username" placeholder="用户名" v-model='username'>
                <input type="password" name="pw" id="pw" class="password" placeholder="密码" v-model='password'>
                <button type="submit" name="submit" id="submitBtn" @click='login()'>登&nbsp;&nbsp;录</button>
                <div class="error"><span>+</span></div>
                <div v-if='!flagLogin' class="tipWrap">用户名或密码不正确！</div>
            </form>
        </div>
    </div>
</template>
<script>
	export default {
        data() {
            return {
                username: '',
                password: '',
                flagLogin: true
            }
        },
        ready: function() {
            $(function() {
                $.supersized({
                    // Functionality
                    slide_interval     : 4000,    // Length between transitions
                    transition         : 1,    // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
                    transition_speed   : 1000,    // Speed of transition
                    performance        : 1,    // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)

                    // Size & Position
                    min_width          : 0,    // Min width allowed (in pixels)
                    min_height         : 0,    // Min height allowed (in pixels)
                    vertical_center    : 1,    // Vertically center background
                    horizontal_center  : 1,    // Horizontally center background
                    fit_always         : 0,    // Image will never exceed browser width or height (Ignores min. dimensions)
                    fit_portrait       : 1,    // Portrait images will not exceed browser height
                    fit_landscape      : 0,    // Landscape images will not exceed browser width

                    // Components
                    slide_links        : 'blank',    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
                    slides             : [    // Slideshow Images
                                             {image : '../imgs/backgrounds/1.jpg'},
                                             {image : '../imgs/backgrounds/2.jpg'},
                                             {image : '../imgs/backgrounds/3.jpg'}
                                         ]

                });
            });   
        },
        methods: {
            login: function() {
                if(this.username=='lhy' && this.password=='lhy031') {
                    window.location.href = '/#!/index';
                }else {
                    this.flagLogin = false;
                }
            }
        }
    }
</script>


