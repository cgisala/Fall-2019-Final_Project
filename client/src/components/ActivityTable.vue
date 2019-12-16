<template>
    <div>
        <!-- <h1>Test</h1> -->
        <div class="card activity-list m-2 p-2">
            <h4 class="cart-title">Activities</h4>

            <div class="edit-table-toogle form-check">
                <!-- <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable"> -->
                <!-- <label for="edit-talbe" class="form-check-label">Edit table?</label> -->
            </div>

            <div id="activity-table">
                <table class="table">
                    <tr>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Activity</th>
                    </tr>
                    <ActivityRow
                        v-bind:duration="duration"
                        v-bind:activity="activity">
                    </ActivityRow>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActivityTable',
    data() {
        return {
            duration: '',
            activity: ''
        }
    },
    mounted() {
        this.getAll()
    },
    methods: {
        getAll() {
            this.$activityService.getAll().then(data => {
                this.states = data
            })
        }
    }
}
</script>

<style scoped>

</style>