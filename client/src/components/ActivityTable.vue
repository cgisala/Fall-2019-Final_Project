<template>
  <div>
    <div class="card activity-list m-2 p-2">
        <h4 class="card-header">Activity Table</h4>
    </div>

    <div id="activity-table">
        <table class="table">
            <tr>
                <th>Date</th>
                <th>Duration</th>
                <th>Activity</th>
            </tr>
            <tr>
                <td v-for="activity in activities" v-bind:key="activity.date"
                    v-bind:date="date">{{ activity.date }}</td>

            </tr>
            <!-- <StudentForm
                v-for="activity in activities" v-bind:key="activity.date"
                v-bind:date="date"
                v-bind:duration="duration"
                v-bind:activity="activity">
            </StudentForm> -->
        </table>
    </div>

  </div>

</template>

<script>
export default {
    name: 'ActivityTable',
    data() {
        return {
            date: '',
            duration: '',
            activity: ''
        }
    },
    props: {
        activities: Array
    },
    mounted() {
        this.getAll()
    },
    methods: {
        getAll() {
            this.$activityService.getAll().then(data => {
               console.log('activities', data) 
            })
        }
    }
    
}
</script>

<style scoped>

#activity-table {
  max-height: 500px;
  overflow: scroll;
}

</style>
