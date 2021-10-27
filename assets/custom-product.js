jQuery(document).ready(function(){
    
    jQuery('variant-radios fieldset:nth-child(1)').addClass('flavours');
    jQuery('variant-radios fieldset:nth-child(2)').addClass('quantity-selector')
    
    var initialFlavour = jQuery('body.product .product-form__input.flavours input[type="radio"]:checked + label').html();
    jQuery('body.product h1').html(initialFlavour);
    
    var trimInitialFlavour = jQuery.trim(initialFlavour);
    var bacon = "bacon";
    var both = "both";
    
    if (trimInitialFlavour == bacon) {
        jQuery('body.product .product-form__input.flavours').addClass('bacon');
        jQuery('.product__media-list-inner-container').css('left','-100%');
        jQuery('.product__media-list-inner-container').css('width','200%');
    } else if (trimInitialFlavour == both) {
        jQuery('body.product .product-form__input.flavours').addClass('both');
        jQuery('.product__media-list-inner-container').css('width','100%');
        jQuery('.product__media-list-inner-container').css('left','0%');
        jQuery('.product__media-list-inner-container').addClass('both-selected');
    }
    
    
    
    jQuery('body.product .product-form__input.flavours input[type="radio"] + label').each(function(){
       jQuery(this).click(function(){
           var selectedFlavour = jQuery(this).html();
           jQuery('body.product h1').html(selectedFlavour);
       }); 
    });
    
    
    jQuery('.flavours > label:nth-child(3)').addClass('cheese');
    jQuery('.flavours > label:nth-child(5)').addClass('bacon');
    jQuery('.flavours > label:nth-child(7)').addClass('both');
    
    jQuery('.flavours > label.bacon').click(function(){
        jQuery('.product__media-list-inner-container').css('left','-100%');
        jQuery('.product__media-list-inner-container').css('width','200%');
        jQuery('.product__media-list-inner-container').removeClass('both-selected');
        jQuery('body.product .product-form__input.flavours').addClass('bacon');
        jQuery('body.product .product-form__input.flavours').removeClass('cheese');
        jQuery('body.product .product-form__input.flavours').removeClass('both');
    }); 
    jQuery('.flavours > label.cheese').click(function(){
        jQuery('.product__media-list-inner-container').css('left','0%');
        jQuery('.product__media-list-inner-container').css('width','200%');
        jQuery('.product__media-list-inner-container').removeClass('both-selected');
        jQuery('body.product .product-form__input.flavours').addClass('cheese');
        jQuery('body.product .product-form__input.flavours').removeClass('both');
        jQuery('body.product .product-form__input.flavours').removeClass('bacon');
    }); 
    jQuery('.flavours > label.both').click(function(){
        jQuery('.product__media-list-inner-container').css('width','100%');
        jQuery('.product__media-list-inner-container').css('left','0%');
        jQuery('.product__media-list-inner-container').addClass('both-selected');
        jQuery('body.product .product-form__input.flavours').addClass('both');
        jQuery('body.product .product-form__input.flavours').removeClass('cheese');
        jQuery('body.product .product-form__input.flavours').removeClass('bacon');
    }); 
    
//    jQuery('fieldset.flavours').prependTo('.product__info-container')
    
    
    //PRODUCT PRICE
    
   
    
});




