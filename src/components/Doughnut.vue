<script>
    import {Doughnut} from 'vue-chartjs'
    
    export default{
        extends: Doughnut,
        data() {
            return {
                netačni: this.$store.state.results.incorrect_answers,
                tačni: this.$store.state.results.correct_answers
            }
        },
        mounted() {
            this.renderChart({
                labels: ['Netačni odgovori', 'Tačni odgovori'],
                datasets: [{
                    backgroundColor: ['#E74C3C', '#82BF56'],
                    data: [this.netačni, this.tačni]
                }]
            }, {
                responsive: true,
                maintainAspectRatio: false
            })
        }
    }
</script>