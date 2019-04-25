if (process.env.NODE_ENV !== 'production') {
    require('./index.html');
}
import $ from 'jquery';
import Link from '../../assets/js/ajaxLink';
import '../../assets/js/rem';
import "../../assets/css/style.scss";
import "./index.scss";

(function(){
    console.warn(Link)
    var chat = {
      init: function(){
        this.bind();
      },
      bind: function(){
        this.pay();
      },
      pay:function(){
        $.ajax({
            type:"GET",
            url: Link.identity,
            data:'',
            dataType:'json',
            success:function(res){
            }
        })
      }
    }
    chat.init();
})();
  
  