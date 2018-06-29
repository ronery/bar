import { Component, OnInit   } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
        var countDownDate = new Date("Nov 15, 2018 09:30:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

          // Get todays date and time
          var now = new Date().getTime();

          // Find the distance between now an the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          if(seconds < 10){
            var seconds = '0' + seconds;
          }
          if(minutes < 10){
            var minutes = '0' + minutes;
          }
          if(hours < 10){
            var hours = '0' + hours;
          }
          $('.countdown .dias strong').html(days);
          $('.countdown .horas strong').html(hours);
          $('.countdown .minutos strong').html(minutes);
          $('.countdown .segundos strong').html(seconds);
          // document.getElementById("demo").innerHTML = days + "d" + hours + "h "
          // + minutes + "m " + seconds + "s ";

          // If the count down is finished, write some text 
          if (distance < 0) {
            clearInterval(x);
            $('.countdown').hide();
            // document.getElementById("demo").innerHTML = "EXPIRED";
          }
        }, 1000);
    });
  }

}
