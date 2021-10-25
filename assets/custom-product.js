jQuery(document).ready(function(){
    
    jQuery('variant-radios fieldset:nth-child(1)').addClass('flavours')
    
    var initialFlavour = jQuery('body.product .product-form__input.flavours input[type="radio"]:checked + label').html();
    jQuery('body.product h1').html(initialFlavour);
    
    
    jQuery('body.product .product-form__input.flavours input[type="radio"] + label').each(function(){
       jQuery(this).click(function(){
           var selectedFlavour = jQuery(this).html();
           jQuery('body.product h1').html(selectedFlavour);
       }); 
    });
    
    
    jQuery('.flavours > label:nth-child(3)').addClass('cheese');
    jQuery('.flavours > label:nth-child(5)').addClass('bacon');
    jQuery('.flavours > label:nth-child(7)').addClass('both');
    
    jQuery('.bacon').click(function(){
        jQuery('ul.product__media-list').css('left','-100%');
        jQuery('ul.product__media-list').css('width','200%');
    }); 
    jQuery('.cheese').click(function(){
        jQuery('ul.product__media-list').css('left','0%');
        jQuery('ul.product__media-list').css('width','200%');
    }); 
    jQuery('.both').click(function(){
        jQuery('ul.product__media-list').css('width','100%');
        jQuery('ul.product__media-list').css('left','0%');
    }); 
    
    
});




