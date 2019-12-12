<template>
    <div id="add-hours" class="card">

            <h2 class="card-header">Add Activity</h2>
            <div class="card-body">

                <form>

                    <!-- TODO show error alert with list of errors,
                         if there are errors in the form -->
                    <div class="alert alert-danger" v-show="errors && errors.length > 0">
                        <li v-for="error in errors">{{ error }}</li>
                    </div>
                    
                    <div class="form-group">
            
                        <label class="form-label" for="when">Date</label>
                        <!-- TODO v-model to app data property -->
                        <input id="when" class="form-control" type="date" v-model.lazy="date">
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="duration">Duration</label>
                        <!-- TODO v-model to app data property -->
                        <input id="duration" class="form-control" v-model.number.lazy="duration">
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="type">Activity</label>
                        <!-- TODO create a select. v-model type -->
                        <!-- TODO create one option for each type  -->
                        <select class="form-control" v-model="type">
                            <option v-for="type in types" v-bind:value="type">{{ type }}</option>
                        </select>
                    
                    </div>

                    <div>
                        <!-- TODO v-on click event -->
                        <button class="btn btn-primary mt-2" type="button" v-on:click="submit">Add record</button>
                    </div>

                </form>
            </div>
        </div>
</template>

<script>
export default {
    name: 'ActivityForm',
    data() {
        return {
            date: '',
            duration: '',
            types: ['sketching', 'cleaning', 'walking', 'programming','studying'],
            type: 'programming',
            activityRecords: '',
            errors: []
        }
    },
    methods: {
              submit() {
                  this.errors = []

                  //Validation for the date
                //   if (this.whenLocal == 'Invalid Date' || this.whenLocal.getTime() > new Date().getTime()) {
                //       this.errors.push('Select a valid date, today or in the past')
                //   }

                  //Validation for the duration
                  if (typeof (this.duration) != "number" || this.duration <= 0) {
                      this.errors.push('The number of hours must be a number greater than zero.')
                  }

                  if (this.errors.length == 0) {
                        let activity = {
                            date: this.date,
                            duration: this.duration,
                            activity: this.type
                        }
                        this.$activityService.addActivity(activity).then( activity => {
                            console.log('It works')
                        })
                        //this.activityRecords.push(record)
                        // this.activityRecords.sort(function (r1, r2) {
                        //     return r1.when.getTime() - r2.when.getTime()
                        // })
                    }
                }
            }
    
}
</script>

<style scoped>

</style>