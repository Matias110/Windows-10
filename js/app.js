$(document).ready(function () {
    /////////--MENU WINDOWS--/////////
    $(".left > span").click(function () {
        $(".menu-down").toggleClass("menu-up");
    });
    /////////--ACCIÓN VENTANA--/////////
    $(".menu-down .action").mouseenter(function () {
        $(".menu-down .action .title").animate({
            width: '16.25em' /* 260/16 */
        }, 100)
        $('.menu-down .action .title > p').css({
            overflow: 'visible',
            textIndent: '1em'
        });
        $('.menu-down .action').css({
            boxShadow: '2px 0px 5px 0px rgba(0,0,0,0.75)'
        })
    });
    $(".menu-down .action").mouseleave(function () {
        $(".menu-down .action .title").animate({
            width: '3.4375em' /* 55/16 */
        }, 100)
        $('.menu-down .action .title > p').css({
            overflow: 'hidden',
            textIndent: '-666em'
        });
        $('.menu-down .action').css({
            boxShadow: '4px 0px 5px -1px rgba(0,0,0,0.0)'
        })
    });
    /////////--GRUPO--/////////
    $(".menu-down .group .box-group").mouseenter(function () {
        $('.box-group .txt').css({
            overflow: 'visible',
            textIndent: '0',
            width: '100%'
        })
    });
    $(".menu-down .group .box-group").mouseleave(function () {
        $('.box-group .txt').css({
            overflow: 'hidden',
            textIndent: '100%',
            whiteSpace: 'nowrap',
            width: '0'
        })
    });
    /////////--EXPLORAR--/////////
    $(".menu-down .group .box-explo").mouseenter(function () {
        $('.box-explo .txt .content').css({
            display: 'block',
        })
    });
    $(".box-explo").mouseleave(function () {
        $('.box-explo .txt .content').css({
            display: 'none',
        })
    });
});
//ESCRITORIO APLICACIONES
$(function () {
    $(".icon").draggable();
    $("#trash").droppable({
        accept: ".icon",
        drop: function (event, ui) {
            ui.draggable.fadeOut(function () {
                ui.draggable.remove();
            });
        }
    });
});