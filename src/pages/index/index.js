if (process.env.NODE_ENV !== 'production') {
    require('./index.html');
}
import $ from 'jquery';
import "../../assets/css/style.scss";
import "./index.scss";

$.ajax({
    type:"GET",
    url:'/api/identity',
    data:'',
    dataType:'json',
    success:function(res){
    }
})