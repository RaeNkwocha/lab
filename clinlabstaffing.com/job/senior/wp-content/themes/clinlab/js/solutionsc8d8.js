function init_solutions( solutionData){

    solutionData.forEach(function (sol) { 
        sol.isFeatured = false;
    });

    Vue.component('solution', {

        props: ['solution'],
        template: '#solution-template'
        }
    )
    Vue.component('featured-solution', {
        props: ['featuredSolution'],
        template: '#featured-solution-template'
    })

    new Vue({
        el: '#solution-wrap',
        data: {
            solutions: solutionData,
            featuredSolution: Object,
        },
        created: function() {

            var vm = this;
            vm.solutions.forEach(function (sol) { 
                vm.preloadImage(sol.image);
            })
            
            vm.featuredSolution = vm.solutions[0]
            vm.featuredSolution.isFeatured = true;

            /*
            vm = this
            this.$http.get('/wp-content/themes/clinlab/solutions.php').then(function(response) {
                vm.solutions = response.body
                vm.solutions.forEach(function (sol) { 
                    vm.preloadImage(sol.image);  
                    sol.isFeatured = false;
                })
                vm.featuredSolution = vm.solutions[0]
                vm.featuredSolution.isFeatured = true;
            }, function(response) {
                console.log("uh, oh..")
            });
            */
        },
        methods: {
            newFeaturedSolution: function(new_solution) {
                this.featuredSolution.isFeatured = false;
                this.featuredSolution = new_solution
                new_solution.isFeatured = true;
            },
            plusPressed: function(solution) {
                window.location.href = solution.button_link;
            },
            preloadImage: function (imgSrc) {
                var preloadLink = document.createElement("link");
                preloadLink.href = imgSrc;
                preloadLink.rel = "preload";
                preloadLink.as = "image";
                document.head.appendChild(preloadLink);
            }
        }
   });

}