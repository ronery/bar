import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-fotos-videos',
  templateUrl: './fotos-videos.component.html',
  styleUrls: ['./fotos-videos.component.scss']
})
export class FotosVideosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.scrollAnimation').on('click', function(){
        var targetId = $(this).attr('href');
        $("html, body").animate({ scrollTop: $(targetId).offset().top }, 1000);
      });
      
    });
  }

}
