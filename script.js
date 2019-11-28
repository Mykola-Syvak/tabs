'use strict';
/*jshint esversion: 6 */
/*jshint devel:true */

window.addEventListener('DOMContentLoaded', function() {
    
    let tab = document.querySelectorAll('.tab'),
        tabs = document.querySelector('.tabs-wrapper'),
        tabContent = document.querySelectorAll('.tab-content');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }    

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabs.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});