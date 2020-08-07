$(function(){
    
    $('.hamburguer').on('click', function(){
        
        //Verifica o tamanho da tela do usuario para abrir o menu responsivamente
        const width = $(window).width() < 768 ? true : false;

        if($(this).hasClass('active')){
            animation(true, width)
            $(this).removeClass('active');
        }
        else{
            animation(false, width)
            $(this).addClass('active');  
        }
    });

    function animation(botao, menu){
        
        //Fechar Menu
        if(botao){
            $('.f1').css({ transform: 'rotate(0deg)', top: '0' })
            $('.f2').css({ display: 'block'})
            $('.f3').css({ transform: 'rotate(0deg)', bottom: '0' })
            $('.menu').css({ width: '0px' });
        }

        //Abrir Menu
        else{
            $('.f1').css({ transform: 'rotate(45deg)', top: '4px' })
            $('.f2').css({ display: 'none' })
            $('.f3').css({ transform: 'rotate(-45deg)', bottom: '4px' })
            if(menu){ $('.menu').css({ width: '100%' }); }
            else{ $('.menu').css({ width: '375px' }); }
        }
    }
    
});