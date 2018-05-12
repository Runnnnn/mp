<template>
  <div>
    My Weather~
    <div>{{weather.location.path}}</div>
    <div>{{weather.now.text}}-{{weather.now.temperature}}摄氏度</div>
    <div>穿衣：{{suggestion.dressing.brief}}</div>
    <map name="location" v-bind:latitude='location.latitude' v-bind:longitude='location.longitude'></map>
    {{location.latitude}}-{{location.longitude}}
    <camera device-position='front' flash='off' binderror='error' style='width:100%; height:300px'></camera>
    <button v-on:click='takePhoto'>take photo</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            weather: {
                location: {
                },
                now: {},
                last_update: '',
            },
            suggestion: {
                dressing: {}
            },
            location: {
                latitude: '',
                longitude: '',
            }
        }
    },
    methods: {
        setWeather(data) {
            this.weather = data
        },
        setSuggestion(data) {
            this.suggestion = data
        },
        takePhoto() {
            const ctx = wx.createCameraContext()
            ctx.takePhoto({
                quality: 'high',
                success(res) {
                    console.log(res);
                }
            })
        }
    },
    mounted() {
        var self = this
        wx.getLocation({
            success(data) {
            console.log('location', data)
            let {latitude, longitude} = data;
            let location = `${latitude}:${longitude}`
            this.location = {
                latitude: (latitude),
                longitude: (longitude),
            }
            wx.request({
                url: `https://api.seniverse.com/v3/weather/now.json?key=88dexbfn3i7vhabw&location=${location}&language=zh-Hans&unit=c`,
                success(res) {
                    console.log('weather', res)
                    let {location, now, last_update} = res.data.results[0]
                    self.setWeather({location, now, last_update})
                }
            })
            wx.request({
                url: `https://api.seniverse.com/v3/life/suggestion.json?key=88dexbfn3i7vhabw&location=${location}&language=zh-Hans`,
                success(res) {
                    console.log('生活指数', res)
                    let {suggestion} = res.data.results[0]
                    self.setSuggestion(suggestion)
                }
            })
            } 
        })
    }
}
</script>

<style scoped>

</style>
