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
    jQuery('.flavours > label:nth-child(7)').addClass('super');
//     jQuery('.flavours > label:nth-child(9)').addClass('super');
    
    jQuery('.flavours > label.bacon').click(function(){
        jQuery('.product__media-list-inner-container').css('left','-100%');
        jQuery('.product__media-list-inner-container').css('width','300%');
//         jQuery('.product__media-list-inner-container').removeClass('both-selected');
        jQuery('body.product .product-form__input.flavours').addClass('bacon');
        jQuery('body.product .product-form__input.flavours').removeClass('cheese');
//         jQuery('body.product .product-form__input.flavours').removeClass('both');
        jQuery('body.product .product-form__input.flavours').removeClass('super');
        jQuery('body.product .product__description p').removeClass('show');
        jQuery('body.product .product__description p').addClass('hide');
        jQuery('body.product .product__description p.bacon_description').addClass('show');
    }); 
    jQuery('.flavours > label.cheese').click(function(){
        jQuery('.product__media-list-inner-container').css('left','0%');
        jQuery('.product__media-list-inner-container').css('width','300%');
//         jQuery('.product__media-list-inner-container').removeClass('both-selected');
        jQuery('body.product .product-form__input.flavours').addClass('cheese');
//         jQuery('body.product .product-form__input.flavours').removeClass('both');
        jQuery('body.product .product-form__input.flavours').removeClass('bacon');
        jQuery('body.product .product-form__input.flavours').removeClass('super');
        jQuery('body.product .product__description p').removeClass('show');
        jQuery('body.product .product__description p').addClass('hide');
        jQuery('body.product .product__description p.cheese_description').addClass('show');
    }); 
//     jQuery('.flavours > label.both').click(function(){
//         jQuery('.product__media-list-inner-container').css('width','150%');
//         jQuery('.product__media-list-inner-container').css('left','0%');
//         jQuery('.product__media-list-inner-container').addClass('both-selected');
//         jQuery('body.product .product-form__input.flavours').addClass('both');
//         jQuery('body.product .product-form__input.flavours').removeClass('cheese');
//         jQuery('body.product .product-form__input.flavours').removeClass('bacon');
//         jQuery('body.product .product-form__input.flavours').removeClass('super');
//         jQuery('body.product .product__description p').removeClass('show');
//         jQuery('body.product .product__description p').addClass('hide');
//         jQuery('body.product .product__description p.both_description').addClass('show');
//     }); 
    jQuery('.flavours > label.super').click(function(){
        jQuery('.product__media-list-inner-container').css('width','300%');
        jQuery('.product__media-list-inner-container').css('left','-200%');
//         jQuery('.product__media-list-inner-container').removeClass('both-selected');
        jQuery('body.product .product-form__input.flavours').addClass('super');
        jQuery('body.product .product-form__input.flavours').removeClass('cheese');
        jQuery('body.product .product-form__input.flavours').removeClass('bacon');
//         jQuery('body.product .product-form__input.flavours').removeClass('both');
        jQuery('body.product .product__description p').removeClass('show');
        jQuery('body.product .product__description p').addClass('hide');
        jQuery('body.product .product__description p.super_description').addClass('show');
    }); 
    
//    jQuery('fieldset.flavours').prependTo('.product__info-container')
    
    
    //PRODUCT PRICE
    
    
    
    //ADD PRODUCT TO CART WITHOUT REFRESHING PAGE
    
    productVariable();
    
    jQuery('fieldset label').click(function(){
                
        productVariable();
        
    });
    
    jQuery('.quantity__button').click(function(){
                
        productQuantity();
        
    });
    
    function productVariable() {
        setTimeout(function(){
            
//             var quantityCheckedItem = jQuery('fieldset.quantity-selector').children("input:checked + label").html().trim();
            var flavourCheckedItem = jQuery('fieldset.flavours').children("input:checked + label").html().trim();
            var quantityNumber = quantityCheckedItem.match(/\d+/);
            var selectedString = flavourCheckedItem + ' ' + quantityNumber; 
            
            
            
            jQuery('.variant-container').each(function(){
                
//                 var selectedVar = jQuery(this).children('.variant-title:contains(' + flavourCheckedItem + '):contains(' + quantityNumber + ')').parent().children('.variant-id').html();
                var selectedVar = jQuery(this).children('.variant-title:contains(' + flavourCheckedItem + ')').parent().children('.variant-id').html();
                
//                 var selectedVarPrice = jQuery(this).children('.variant-title:contains(' + flavourCheckedItem + '):contains(' + quantityNumber + ')').parent().children('.variant-cost').html();
                var selectedVarPrice = jQuery(this).children('.variant-title:contains(' + flavourCheckedItem + ')').parent().children('.variant-cost').html();
                
//                 var selectedAvailability = jQuery(this).children('.variant-title:contains(' + flavourCheckedItem + '):contains(' + quantityNumber + ')').parent().children('.variant-availability').html();
                var selectedAvailability = jQuery(this).children('.variant-title:contains(' + flavourCheckedItem + ')').parent().children('.variant-availability').html();
                
                var varFalse = 'false';
                
                jQuery('button.mybutton').attr('data-cart-add', selectedVar);
                jQuery('button.mybutton span.item-price').html(selectedVarPrice);
                jQuery('button.mybutton span.item-price-availability').html(selectedAvailability);
                
//                setTimeout(function(){
                
                    var selectedAvailabilityHTML = jQuery('button.mybutton span.item-price-availability').html();

                    if (selectedAvailabilityHTML == varFalse) {
                        jQuery('button.mybutton').addClass('unavailable');
                        jQuery('.soldout').css('display', 'flex');
                     } else {
                         jQuery('button.mybutton').removeClass('unavailable');
                         jQuery('.soldout').hide();
                     }
                    
//                }, 500);
            });
            
            
            
        }, 500);
    }
    
    function productQuantity() {
        setTimeout(function(){
        
            var quantityValue = jQuery('.quantity__input').val();
            jQuery('button.mybutton').attr('data-cart-quantity', quantityValue);
            
        }, 500);
    }
    
    //PRODUCT IMAGE HEIGHT ON MOBILE
    
    
    imageHeight();
    
    jQuery(window).resize(function(){
        
        imageHeight();
        
    })
    
    function imageHeight() {
        var windowWidth = jQuery(window).outerWidth();
        
        if (windowWidth < 600) {
            var productInfoHeight = jQuery('.product__info-wrapper').outerHeight();
            var windowHeight = jQuery(window).outerHeight();
            
            jQuery('body.product .product__media-item img').css('max-height',windowHeight - productInfoHeight);
            
        }
    }
    
   
    
});









