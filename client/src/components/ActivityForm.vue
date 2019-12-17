<template>
    <div id="add-hours" class="card">

            <h2 class="card-header">Add Activity</h2>
            <div class="card-body">

                <form>

                    <div class="alert alert-danger" v-show="errors && errors.length > 0">
                        <li v-for="error in errors">{{ error }}</li>
                    </div>
                    
                    <!-- Date -->
                    <div class="form-group">
                        <label class="form-label" for="when">Date</label>
                        <input id="when" class="form-control" type="date" v-model.lazy="date">
                    </div>

                    <!-- Duration -->
                    <div class="form-group">
                        <label class="form-label" for="duration">Duration</label>
                        <input id="duration" class="form-control" v-model.number.lazy="duration">
                    </div>

                    <!-- Activity -->
                    <div class="form-group">
                        <label class="form-label" for="type">Activity</label>
                        <select class="form-control" v-model="type">
                            <option v-for="type in types" v-bind:value="type">{{ type }}</option>
                        </select>
                    
                    </div>

                    <!-- Button -->
                    <div>
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
                    }
                }
            }
    
}
</script>

<style scoped>

</style>