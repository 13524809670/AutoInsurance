 (function ($) {

    function init() {

        mobiscroll.scroller('#test1', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['投保', '不投保',]
                }]
            ]
        });


        mobiscroll.scroller('#test2', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['投保', '不投保',]
                }]
            ]
        });


        mobiscroll.scroller('#test3', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['10万', '30万','50万','70万','100万','200万','不投保',]
                }]
            ]
        });


        mobiscroll.scroller('#test4', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['1万', '5万','10万','20万','不投保',]
                }]
            ]
        });


        mobiscroll.scroller('#test5', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['1万', '5万','10万','20万','不投保',]
                }]
            ]
        });


        mobiscroll.scroller('#test6', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['投保', '不投保',]
                }]
            ]
        });


        mobiscroll.scroller('#test7', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['投保', '不投保',]
                }]
            ]
        });


        mobiscroll.scroller('#test8', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['国产玻璃', '进口玻璃','不投保',]
                }]
            ]
        });


        mobiscroll.scroller('#test9', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['5万','1万','2万', '不投保',]
                }]
            ]
        });


        mobiscroll.scroller('#test10', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['投保', '不投保',]
                }]
            ]
        });


        mobiscroll.scroller('#test11', {
            theme: theme,
            display: display,
            lang: lang,
            wheels: [
                [{
                    data: ['投保', '不投保',]
                }]
            ]
        });
    }


    var theme, display, lang;

    $('.settings').on('change', function () {
        theme = $('#theme').val() || mobiscroll.settings.theme;
        display = $('#display').val();
        lang = $('#language').val();

        init();
    });

    $('#theme').trigger('change');
   
})(mobiscroll.$);