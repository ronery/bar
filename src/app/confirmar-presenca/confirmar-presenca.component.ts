import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-confirmar-presenca',
  templateUrl: './confirmar-presenca.component.html',
  styleUrls: ['./confirmar-presenca.component.scss']
})
export class ConfirmarPresencaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.line-form input, .line-form select, .line-form textarea').on('focus', function(){
        $(this).parent('.line-form').addClass('focused');
      }).on('blur', function(){
        if(!$(this).val()){
          $(this).parent('.line-form').removeClass('focused');
        }
      })

      function eachFieldsForm(){
        $('.line-form input, .line-form select, .line-form textarea').each(function(){
          if(!$(this).val()){
            $(this).parent('.line-form').removeClass('focused');
          }else{
            $(this).parent('.line-form').addClass('focused');
          }
        })
      }
      eachFieldsForm();

      

    });
  }

}
