$(function(){
    $('.accordian li:odd:gt(0)').hide();

    $('.accordian li:odd').addClass('dimension');
    $('.accordian li:even:even').addClass('even');
    $('.accordian li:even:odd').addClass('odd');

    $('.accordian li:even').css('cursor', 'pointer');

    $('.accordian li:even').click(function(){
        var cur = $(this).next();
        var old = $('.accordian li:odd:visible');

        if(cur.is(':visible'))
            return false;

        old.slideToggle(500);
        cur.stop().slideToggle(500);
    });

});

var ctx = document.getElementById("myChart").getContext("2d");

var acidity = document.getElementById('acidity').value;
var flavor = document.getElementById('flavor').value;
var sweetness = document.getElementById('sweetness').value;
var aroma = document.getElementById('aroma').value;

var myChart = new Chart(ctx, {
type: 'horizontalBar',
      data: {
          labels: ["arome", "saveur", "acidité", "douceur"],
          datasets: [{
              label: '',
              data: [aroma, flavor, acidity, sweetness],
              backgroundColor: [
                '#53312B',
                '#53312B',
                '#53312B',
                '#53312B'

              ],
              borderColor: [
                '#394C23',
                '#394C23',
                '#394C23',
                '#394C23'

              ],
              borderWidth: 1
          }]
      },
      options: {
            legend:{
                display:false
            },

          scales: {
              xAxes: [{
                ticks: {
            		min: 0
                }
            }],
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

