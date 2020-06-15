var menuResponsive = {
    init: function () {
        this.srollDown();
        this.showSearch();
        this.showOvl();
        this.rmOvl();
        this.rmSearch();
        this.showMenu();
        this.megaMenu();
    },
    showSearch: function () {
        var Search = document.querySelector('.Head .Head__content .Head__icon .fa-search');
        var form = document.querySelector('.Search');
        Search.addEventListener('click', function () {
            form.classList.add('show__search')
        })
    },

    showOvl: function () {
        var Search = document.querySelector('.Head .Head__content .Head__icon .fa-search');
        var ovl = document.querySelector('.wrapper__ovl');
        Search.addEventListener('click', function () {
            ovl.classList.add('show__ovl')
        })
    },

    rmOvl: function () {
        var plus= document.querySelector('.Search__remove');
        var ovl = document.querySelector('.wrapper__ovl');
        plus.addEventListener('click', function () {
            ovl.classList.remove('show__ovl')
        })
    },

    rmSearch: function () {
        var plus= document.querySelector('.Search__remove');
        var form = document.querySelector('.Search');
        plus.addEventListener('click', function () {
            form.classList.remove('show__search')
        })
    },
    showMenu: function () {
        var bars= document.querySelector('.humberger');
        var menu = document.querySelector('.Head__menu-box');
        bars.addEventListener('click', function () {
            menu.classList.toggle('show__menu')
        })
    },
    srollDown: function(){
        var prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            var currentScrollPos = window.pageYOffset;
            var headTop=document.querySelector('.Head')
            if (prevScrollpos > currentScrollPos){
                headTop.classList.add('scroll')
            }
            else{
                headTop.classList.remove('scroll')
            }
            prevScrollpos = currentScrollPos;
        }
    },
    /////rps/////
    megaMenu: function () {
        var megaLink= document.querySelector('.Head .Head__content .Head__menu-box .Head__menu .Head__mega');
        var mega = document.querySelector('.mega__box');
        megaLink.addEventListener('click', function () {
            mega.classList.toggle('show__mega')
        })
    },
    /////rps/////
}
menuResponsive.init()