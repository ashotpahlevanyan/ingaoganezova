$(document).ready(function(){
    $("#address").on("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        //window.open('https://www.google.com/maps/place/7,+1+Nikoghayos+Adonts+St,+Yerevan+0014,+%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F/@40.2098294,44.5263424,17z/data=!3m1!4b1!4m5!3m4!1s0x406aa2cbf31b85ad:0x77fbc66e3f6a4f82!8m2!3d40.2098294!4d44.5285311', '_blank');
        $(".map").toggleClass("show");
    });
    /*(function() {
        let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        window.requestAnimationFrame = requestAnimationFrame;
    })();

    let flakes = [];
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let flakeCount = 200;
    let mX = -100;
    let mY = -100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function snow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font='400 16px "Font Awesome 5 Free';
        for (var i = 0; i < flakeCount; i++) {
            var flake = flakes[i],
                x = mX,
                y = mY,
                minDist = 100,
                x2 = flake.x,
                y2 = flake.y;

            var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
                dx = x2 - x,
                dy = y2 - y;

            if (dist < minDist) {
                var force = minDist / (dist * dist),
                    xcomp = (x - x2) / dist,
                    ycomp = (y - y2) / dist,
                    deltaV = force / 2;

                flake.velX -= deltaV * xcomp;
                flake.velY -= deltaV * ycomp;

            } else {
                flake.velX *= .98;
                if (flake.velY <= flake.speed) {
                    flake.velY = flake.speed
                }
                flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
            }
            ctx.fillText('',flake.x += flake.velX,flake.y += flake.velY);
            ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
            flake.y += flake.velY;
            flake.x += flake.velX;
            flake.rotation += 1;

            if (flake.y >= canvas.height || flake.y <= 0) {
                reset(flake);
            }


            if (flake.x >= canvas.width || flake.x <= 0) {
                reset(flake);
            }

            ctx.beginPath();
            //ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(snow);
    };

    function reset(flake) {
        flake.x = Math.floor(Math.random() * canvas.width);
        flake.y = 0;
        flake.size = (Math.random() * 3) + 2;
        flake.speed = (Math.random() * 1) + 0.5;
        flake.velY = flake.speed;
        flake.velX = 0;
        flake.opacity = (Math.random() * 0.5) + 0.3;
        flake.rotation = 0;
    }

    function init() {
        for (var i = 0; i < flakeCount; i++) {
            var x = Math.floor(Math.random() * canvas.width),
                y = Math.floor(Math.random() * canvas.height),
                size = (Math.random() * 3) + 2,
                speed = (Math.random() * 1) + 0.5,
                opacity = (Math.random() * 0.5) + 0.3,
                rotation = 40;

            flakes.push({
                speed: speed,
                velY: speed,
                velX: 0,
                x: x,
                y: y,
                size: size,
                stepSize: (Math.random()) / 30,
                step: 0,
                angle: 180,
                opacity: opacity,
                rotation: rotation
            });
        }

        snow();
    };

    canvas.addEventListener("mousemove", function(e) {
        mX = e.clientX,
            mY = e.clientY
    });

    init();

    function resizeCanvas(e) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    $(window).resize(resizeCanvas);*/
});
