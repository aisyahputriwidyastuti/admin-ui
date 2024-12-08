import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const chartSetting = {
    yAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    width: 500,
    height: 300,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
};

export default function BarsDataset(props) {
    const { desc } = props;

    return (
        <BarChart
            dataset={desc.data}
            xAxis={[{ scaleType: 'band', dataKey: desc.dataKey }]}
            series={desc.series}
            {...chartSetting}
        />
    );
}