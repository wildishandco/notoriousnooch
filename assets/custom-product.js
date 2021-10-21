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
    
    
    
});




