//при клике по элементу с классом buy мы будем обрабатывать событие кликом
//и выполнять по этому событию некую функцию
$('.buy').click(function(){
    var price = $(this).data('price'),//получаем атрибуты из кнопки
        product = $(this).data('product');//получаем атрибуты из кнопки
    console.log(price, product);//получим значение и вызовем модальное окно 
    $('#price').val(price);//добавляем атрибуты в форму модального окна
    $('#product').val(product);
    $('#cart').modal();//вызываем само модальное окно
    return false;//исключаем переход по ссылке
});