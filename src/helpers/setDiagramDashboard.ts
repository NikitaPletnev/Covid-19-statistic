import {ECBasicOption} from "echarts/types/dist/shared";
import * as echarts from 'echarts';

const setDiagramDashboard = () => {

    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
            {
                name: 'Total Death',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#fb5a09',
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: 'Total Recovered',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                color: '#f8bf00',
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Total Cases',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                color: '#8531ff',
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
        ]
    };

    option && myChart.setOption(<ECBasicOption>option);

}

export default setDiagramDashboard;
