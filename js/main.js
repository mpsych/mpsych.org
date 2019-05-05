      window.COOLROTATION = 0;

      window.TICKLEOFFSET = 1000;

      window.onload = function() {

        var me_cube = document.getElementById('me_cube');

        me_cube.onclick = function() {

          clearTimeout(window.TICKLEINTERVAL_A);
          clearTimeout(window.TICKLEINTERVAL_B);
          clearTimeout(window.TICKLEINTERVAL_C);
          clearInterval(window.TICKLEINTERVAL);

          window.COOLROTATION += 90;

          me_cube.classList.add('spin');

          var me_container = document.getElementById('me_container');

          var t_str = 'translateX(40px) rotateY(' + window.COOLROTATION + 'deg) translateX(-40px)';
          me_cube.style.transform = t_str;
          me_cube.style.webkitTransform = t_str;
          me_cube.style.mozTransform = t_str;

          me_container.classList.add('blur');

          setTimeout(function() {
            me_container.classList.remove('blur');
          }, 250);

        };

        window.TICKLEINTERVAL = setInterval(function() {

          window.TICKLEINTERVAL_A = setTimeout(function(){
            var t_str = 'translateX(40px) rotateY(7deg) translateX(-40px)';
            me_cube.style.transform = t_str;
            me_cube.style.webkitTransform = t_str;
            me_cube.style.mozTransform = t_str;


          },TICKLEOFFSET+1000);

          window.TICKLEINTERVAL_B = setTimeout(function(){

            var t_str = 'translateX(40px) rotateY(0deg) translateX(-40px)';
            me_cube.style.transform = t_str;
            me_cube.style.webkitTransform = t_str;
            me_cube.style.mozTransform = t_str;            

          },TICKLEOFFSET+1500);

          window.TICKLEINTERVAL_C = setTimeout(function(){
            
            var t_str = 'translateX(40px) rotateY(0deg) translateX(-40px)';
            me_cube.style.transform = t_str;
            me_cube.style.webkitTransform = t_str;
            me_cube.style.mozTransform = t_str;            

          },TICKLEOFFSET+2000);        

        }, 30000);


      };
