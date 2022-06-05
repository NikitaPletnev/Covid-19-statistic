import {ECBasicOption} from "echarts/types/dist/shared";
import * as echarts from 'echarts';

const setDiagramDashboard = (countries: string[], deaths: number[], activeCases: number[], recovered: number[]) => {

    type EChartsOption = echarts.EChartsOption;

    const chartDom = document.getElementById('dashboardDiagram')!;
    const  myChart = echarts.init(chartDom);
    let option: EChartsOption;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        title: {
          show: true,
            text: 'Statistics',
            left: 30
        },
        legend: {
            right: '4%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '14%',
            top: '12%',
            containLabel: true
        },
        yAxis: {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data: countries
        },
        dataZoom: {
            start: countries.length > 100 ? 93 : countries.length,
            type: "inside"
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
                data: deaths
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
                data: recovered
            },
            {
                name: 'Total Active Cases',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                color: '#77d01b',
                emphasis: {
                    focus: 'series'
                },
                data: activeCases
            },
        ]
    };

    option && myChart.setOption(<ECBasicOption>option);

}

export default setDiagramDashboard;
