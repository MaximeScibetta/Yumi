<template>
    <div class="postal">
        <label for="postal" class="postal__label">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 54.757 54.757" style="enable-background:new 0 0 54.757 54.757;" xml:space="preserve">
                <g>
                    <path d="M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5
                        s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z"/>
                    <path d="M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952
                        L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4
                        C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031
                        C45.576,13.08,46.321,24.468,41.099,31.431z"/>
                </g>
            </svg>
        </label>
        <places
            class="postal__input"
            v-model="form.country.label"
            placeholder="Où souhaitez-vous être livré ?"
            @change="val => { form.country.data = val; checkLocation() }"
            :options="{ countries: ['BE'] }">
        </places>
    </div>
</template>

<script>
import Places from 'vue-places'
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: 'PostalInput',
    components: {
        Places
    },
    data() {
        return {
            form: {
                country: {
                    label: null,
                    data: {},
                },
            },
        };
    },
    methods: {
        checkLocation(data){
            if(this.form.country.data.city === 'Liège' || this.form.country.data.name === 'Liège'){
                this.$emit('checkLocationn', true)
                this.location(true)
            }else if(this.form.country.data.administrative === 'Région de Bruxelles-Capitale - Brussels Hoofdstedelijk Gewest' || this.form.country.data.name === 'Bruxelles'){
                this.$emit('checkLocationn', true)
                this.location(true)
            }else{
                this.$emit('checkLocationn', false)
                this.location(false)
            }
        },
        ...mapMutations([
            'location'
        ])
    }
}
</script>

