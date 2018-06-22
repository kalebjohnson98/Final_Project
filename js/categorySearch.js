"use strict";
{
    let categorySearch = {
        template: `
        <div class="loader" ng-show="$ctrl.move">
        </div>

        <div id="blank">
            <div class="links">
              <a class="navBar" href="#!/Home">Home</a>
              <a class="navBar" href="#!/Account">Account</a>
              <a class="navBar" href="#!/yourList">My Podcasts</a>
            </div>
            <div ng-hide="$ctrl.move">
            <h1 class="categoryTitles">Minutes</h1>
            <div class="minuteBoxHolder">
                <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[0,15]> <span>0-15</span></span>
                <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[16,30]> <span>15-30</span></span>
                <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[31,45]> <span>30-45</span></span>
                <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[46,60]> <span>45-60</span></span>
                <span class="minuteBoxes"><input type="checkbox" ng-model="$ctrl.length" ng-true-value=[61,300]> <span>60+</span></span>
            </div>
            <h1 class="categoryTitles">Categories</h1>
            <div id="categories">

                <div class="icons" ng-click="$ctrl.categoryButtons('67,103,101,105')">
                    <img src="icons/art.svg" alt="art"><p>Art & Design</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('67,93,157')">
                    <img src="icons/biz.svg" alt="biz"><p>Business</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('84')">
                    <img src="icons/car.svg" alt="cars">
                    <p>Cars</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('133')">
                    <img src="icons/comedy.svg" alt="comedy">
                    <p>Comedy</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('111')">
                    <img src="icons/education.svg" alt="education">
                    <p>Education</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('88,89,90,91')">
                    <img src="icons/fitness.svg" alt="fitness">
                    <p>Fitness & Nutrition</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('102')">
                    <img src="icons/food.svg" alt="food">
                    <p>Food</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('148, 150')">
                    <img src="icons/history.svg" alt="history">
                    <p>History</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('82, 88')">
                    <img src="icons/hobbies.svg" alt="hobbies">
                    <p>Hobbies</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('138,68')">
                    <img src="icons/movieCam.svg" alt="movie">
                    <p>Movies</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('134')">
                    <img src="icons/music-note.svg" alt="music">
                    <p>Music</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('123')">
                    <img src="icons/travel.svg" alt="travel">
                    <p>Places & Travel</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('99,117,151')">
                    <img src="icons/politics.svg" alt="politics">
                    <p>News & Politics</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('107,108,108,110')">
                    <img src="icons/science.svg" alt="science">
                    <p>Science</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('69,70,71,72,73,74,75,76')">
                    <img src="icons/religion.svg" alt="religion">
                    <p>Religion</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('122,104')">
                    <img src="icons/society.svg" alt="society">
                    <p>Society & Culture</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('77,141,158,')">
                    <img src="icons/sports.svg" alt="sports">
                    <p>Sports & Recreation</p>
                </div>

                <div class="icons" ng-click="$ctrl.categoryButtons('112,127,128,130,131,139,140,143,163')">
                    <img src="icons/tech.svg" alt="tech">
                    <p>Technology</p>
                </div>
            </div>
        </div>
        `
        ,
        controller: function (podcastService, $location) {
            let vm = this;
            vm.genre = "";
            vm.length = "";
            vm.move = false;
            vm.categoryButtons = function (genre) {
              vm.move = true;
                let min = vm.length[0];
                let max = vm.length[1];
                vm.categoryClick = podcastService.genreSearch(genre, min, max);
                vm.categoryClick.then(function () {
                    console.log(genre, min, max);
                    $location.path("/results");
                });
            }
        }
    };

    categorySearch.$inject = ["podcastService", "$location"];

    angular
        .module("app")
        .component("categorySearch", categorySearch);
}
