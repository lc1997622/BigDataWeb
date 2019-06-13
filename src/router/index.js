import Vue from 'vue'
import Router from 'vue-router'
import uri from 'urijs'
import Moive from '@/components/Moive'
import bing from '../components/bing'
import home from '../components/home'
import zhuzhuang from '../components/zhuzhuang'
import VoteToCount from '../components/Vote_top_count'
import Allmovie from '../components/Allmovie'
import RatingProportion from '../components/RatingProportion'
import ReleaseCount from '../components/ReleaseCount'
import LanguageCount from '../components/LanguageCount'
import RevenuePerYear from '../components/RevenuePerYear'
import PopularityRevenue from '../components/PopularityRevenue'
import PredictRevenue from '../components/PredictRevenue'
import MoviePredict from '../components/MoviePredict'
import VoteCountRevenue from '../components/VoteCountRevenue'
import cloudWord from '../components/cloudWord'
import PredictVote from '../components/PredictVote'
import radar from '../components/radar'

Vue.use(Router)


export default new Router({
    routes: [{
        path: '/',
        name: 'movie',
        component: Moive,
        redirect: '/list/channel3/首页',
    }, {
        name: 'list',
        path: uri('./list/').absoluteTo("/").toString(),
        props: true,
        component: Moive,
        children: [{
            name: 'channel1',
            path: 'channel1/:category',
            component: bing,
            props: true,
        },{
            name: 'channel2',
            path: 'channel2/:category',
            component: zhuzhuang,
            props: true,
        },{
            name: 'channel3',
            path: 'channel3/:category',
            component: home,
            props: true,
        },{
            name: 'channel4',
            path: 'channel4/:category',
            component: VoteToCount ,
            props: true,
        },{
            name: 'channel5',
            path: 'channel5/:category',
            component: Allmovie ,
            props: true,
        },{
            name: 'channel6',
            path: 'channel6/:category',
            component: RatingProportion ,
            props: true,
        },{
            name: 'channel7',
            path: 'channel7/:category',
            component: ReleaseCount ,
            props: true,
        },{
            name: 'channel8',
            path: 'channel8/:category',
            component: LanguageCount ,
            props: true,
        },{
            name: 'channel9',
            path: 'channel9/:category',
            component: RevenuePerYear ,
            props: true,
        },{
            name: 'channel10',
            path: 'channel10/:category',
            component: PopularityRevenue ,
            props: true,
        },{
            name: 'channel11',
            path: 'channel11/:category',
            component: PredictRevenue ,
            props: true,
        },{
            name: 'channel12',
            path: 'channel12/:category',
            component: MoviePredict ,
            props: true,
        },{
            name: 'channel13',
            path: 'channel13/:category',
            component:  VoteCountRevenue,
            props: true,
        },{
            name: 'channel14',
            path: 'channel14/:category',
            component:  cloudWord,
            props: true,
        },{
            name: 'channel15',
            path: 'channel15/:category',
            component:  PredictVote,
            props: true,
        },{
            name: 'channel16',
            path: 'channel16/:category',
            component:  radar,
            props: true,
        }],
    }]
})