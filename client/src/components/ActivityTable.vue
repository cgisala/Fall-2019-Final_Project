<template>
  <div>
    <div class="card activity-list m-2 p-2">
        <h4 class="card-header">Activity Table</h4>
    </div>

    <div id="activity-table">
        <table class="table">

            <!-- Table heading -->
            <tr>
                <th>Date</th>
                <th>Duration</th>
                <th>Activity</th>
            </tr>
            
            <!-- Loops over the object and displays the data -->
            <tr v-for="activity in activities" :key="activity.id" >
                <td>{{ activity.date }}</td>
                <td>{{ activity.duration }}</td>
                <td>{{ activity.activity }}</td>

            </tr>
        </table>
    </div>

  </div>

</template>

<script>
export default {
    name: 'ActivityTable',
    data() {
        return {
            //Returns the array storing all the activities
            activities: []
        }
    },
    mounted() {
        //Calls the function
        this.getAll()
    },
    methods: {
        //The getAll() function retrieves the data from the database
        getAll() {
            this.$activityService.getAll().then(data => {
              this.activities = data
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
