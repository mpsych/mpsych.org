---
layout: page
permalink: /paper
---

<center>
<div id='container'>

    <div class='margin50' id='pub_details'>

      <div class="bibtex_template" style='font-size:14pt'>
        <center style='width:700px'>
        <span class=' lightgray journal'></span><span class=' lightgray booktitle'></span><span class='lightgray'>,</span> <span class=' lightgray year'></span><br>            
              <span class='title'></span><br>
        <span class=' gray author'><span class="first_initial"></span> <span class="von"></span><span class="last"></span><span class="junior"></span></span><br>

        <span class='lightgray bib_optional bibtexVar' extra='SPOTLIGHT' href='+SPOTLIGHT+'>Spotlight Presentation <img src='gfx/award.png' width='17' height='17'><br></span>
        <span class='lightgray bib_optional bibtexVar' extra='BESTPAPER' href='+BESTPAPER+'>Best Paper Award <img src='gfx/award.png' width='17' height='17'><br></span>

        <br>

        <div style='width:700px; text-align:justify;font-size:12pt;' data-innerText='+ABSTRACT+' class=' bib_optional bibtexVar' extra='ABSTRACT'><img class='bibtexVar thumbnail' src='/papers/+BIBTEXKEY+.png' width="150" height="150" extra="BIBTEXKEY" style='margin-top:10px;float:left; margin-right:12px;filter: grayscale(0%);border:solid #666 1px;'></div>

        <br>

        | <a class='bibtexVar' target='_blank' href='/papers/+BIBTEXKEY+.pdf' extra='BIBTEXKEY'> Paper</a> |

        <span class='bib_optional bibtexVar' extra='SUPPLEMENTAL' href='+SUPPLEMENTAL+'><a class='bibtexVar' extra='SUPPLEMENTAL' href='+SUPPLEMENTAL+' target='_blank'>Supplemental</a> | </span>

        <span class='bib_optional bibtexVar' extra='WEBSITE' href='+WEBSITE+'><a class='bibtexVar' extra='WEBSITE' href='+WEBSITE+' target='_blank'>Website</a> | </span>       

        <span class='bib_optional bibtexVar' extra='FASTFORWARD' href='+FASTFORWARD+'><a class='bibtexVar' extra='FASTFORWARD' href='+FASTFORWARD+' target='_blank'>Fast Forward</a> | </span>   

        <span class='bib_optional bibtexVar' extra='VIDEO' href='+VIDEO+'><a class='bibtexVar' extra='VIDEO' href='+VIDEO+' target='_blank'>Video</a> | </span>        

        <span class='bib_optional bibtexVar' extra='CODE' href='+CODE+'><a class='bibtexVar' extra='CODE' href='+CODE+' target='_blank'>Code</a> | </span>                    
         
        <span class='bib_optional bibtexVar' extra='DATA' href='+DATA+'><a class='bibtexVar' extra='DATA' href='+DATA+' target='_blank'>Data</a> | </span>                    

        <span class='bib_optional bibtexVar' extra='POSTER' href='+POSTER+'><a class='bibtexVar' extra='POSTER' href='+POSTER+' target='_blank'>Poster</a> | </span>                                          


        <br><br>

        <span class='bib_optional bibtexVar ff_video' extra='FASTFORWARD' href='+FASTFORWARD+'>
        <iframe class='bibtexVar' extra='FASTFORWARD' src="+FASTFORWARD+" width="320" height="180" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" style='margin:10px'></iframe>
        </span>
        <span class='bib_optional bibtexVar' extra='VIDEO' href='+VIDEO+'>
        <iframe class='bibtexVar' extra='VIDEO' src="+VIDEO+" width="320" height="180" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" style='margin:10px'></iframe>
        </span>

        <br><br>

        <div class="bibtexVar" style='width:700px;' id="bib+BIBTEXKEY+" extra="BIBTEXKEY">
          <pre style="overflow:auto; text-align:left;color:gray; font-size:0.8em;"><span class="bibtexraw noread"></span></pre>
        </div>      

        <br><br>
        <br><br>

      </center>
      </div>

      <div id='bibtex_display' bibtexkeys=''></div>

  </div>  

</div>
</center>


<script type='text/javascript' src='/js/jquery.js'></script>
<script type='text/javascript' src='/js/moment.js'></script>
<script type='text/javascript' src='/js/bibtex.js'></script>

<script type='text/javascript'>

  var requested_pub = document.location.search.substring(1).split('&')[0];

  $('#bibtex_display').attr('bibtexkeys', requested_pub);

</script>

<bibtex src='/papers/pub.bib'></bibtex>
