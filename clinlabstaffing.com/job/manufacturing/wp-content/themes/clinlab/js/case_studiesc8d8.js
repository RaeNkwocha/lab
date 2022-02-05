// Vue.component('case-study', {
//     props: ['caseStudy', 'slideNum', "totalSlides"],
//     template: `<div class="case-study two-one">
//                 <div class="content">
//                     <transition name="slide-fade" mode="out-in">
//                         <div class="case-study-image" :key="caseStudy.image" :style="{ backgroundImage: 'url(' + caseStudy.image + ')' }"></div>
//                     </transition>
//                     <div class="arrow-wrap">
//                         <div class="arrows">
//                             <div>
//                                 <span v-on:click="$emit('change-slide-number', 'down')" class="left-arrow arrow">
//                                     <img src="/wp-content/uploads/2019/03/arrow.png">
//                                 </span>
//                                 <span class="numbers">
//                                     <span class="current-cs">{{ slideNum }}</span>
//                                     <span class="colon">:</span>
//                                     <span class="total-cs">{{ totalSlides }}</span>
//                                 </span>
//                                 <span v-on:click="$emit('change-slide-number', 'up')" class="right-arrow arrow">
//                                     <img src="/wp-content/uploads/2019/03/arrow.png">
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="text-wrap">
//                         <h5>Case Study</h5>
//                         <transition name="short-fade" mode="out-in">
//                             <h1 :key="caseStudy.title">{{ caseStudy.title }}</h1>
//                         </transition>
//                         <transition name="short-fade" mode="out-in">
//                             <p :key="caseStudy.description">{{ caseStudy.description }}</p>
//                         </transition>
//                         <div class="button-wrap">
//                             <div><div class="plus-wrap"><div>+</div></div></div>
//                             <div class="view"><a href="#">View All Cases</a></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
// })

// jQuery_3_3_1(document).ready(function () {
//     new Vue({
//         el: '#case-study-wrap',
//         data: {
//             caseStudies: [],
//             currentStudy: [],
//             slideNum: '01',
//             totalSlides: '01'
//         },
//         created: function() {
//             csvm = this
//             this.$http.get('/wp-content/themes/clinlab/case_studies.php').then(response => {
//                 csvm.caseStudies = response.body
//                 csvm.caseStudies.forEach(function (cs) { csvm.preloadImage(cs.image) })
//                 csvm.currentStudy = csvm.caseStudies[0]
//                 csvm.totalSlides = "0" + csvm.caseStudies.length
//             }, response => {
//                 console.log("uh, oh..")
//             });
//         },
//         methods: {
//             changeSlide: function (direction) {
//                 if ( direction == "up" ) {
//                     // Do we have more slides?
//                     if (parseInt(this.slideNum) == this.caseStudies.length) {
//                         this.slideNum = '01'
//                         this.currentStudy = this.caseStudies[0]
//                     } else {
//                         slideInt = parseInt(this.slideNum)
//                         slideInt++
//                         this.currentStudy = this.caseStudies[slideInt - 1]
//                         this.slideNum = "0" + slideInt
//                     }
//                 }
//                 if (direction == "down") {
//                     // Do we have more slides?
//                     if (parseInt(this.slideNum) == '01') {
//                         this.slideNum = this.caseStudies.length 
//                         this.slideNum = "0" + this.slideNum
//                         this.currentStudy = this.caseStudies.slice(-1)[0]
//                     } else {
//                         slideInt = parseInt(this.slideNum)
//                         slideInt--
//                         this.currentStudy = this.caseStudies[slideInt - 1]
//                         this.slideNum = "0" + slideInt
//                     }
//                 }
//             }, 
//             preloadImage: function (imgSrc) {
//                 var preloadLink = document.createElement("link");
//                 preloadLink.href = imgSrc;
//                 preloadLink.rel = "preload";
//                 preloadLink.as = "image";
//                 document.head.appendChild(preloadLink);
//             }
//         }
//    })
// })