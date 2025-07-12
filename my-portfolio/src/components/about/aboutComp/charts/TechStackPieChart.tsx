import * as React from 'react';
import {
    pieArcClasses,
    PieChart,
    PieChartProps,
    pieClasses,
} from '@mui/x-charts/PieChart';
import { rainbowSurgePalette } from '@mui/x-charts/colorPalettes';
import { useTheme } from '@mui/material/styles';
import techstackData from '@/data/aboutData/techstackData.json';

export default function TechStackPieChart() {
    const theme = useTheme();
    const palette = rainbowSurgePalette(theme.palette.mode);

    const groups = techstackData.groups; // frontend/backend/etc
    const stacks = techstackData.stacks; // tech stacks

    // Map each stack to its group color
    const groupColorMap = groups.reduce<Record<string, string>>(
        (acc, group, idx) => {
            acc[group.label] = palette[idx % palette.length];
            return acc;
        },
        {}
    );

    const data1 = groups; // inner ring
    const data2 = stacks.map(stack => ({
        ...stack,
        color: groupColorMap[stack.group], // outer ring uses same color as group
    }));

    const settings = {
        series: [
            {
                innerRadius: 0,
                outerRadius: 80,
                data: data1,
                highlightScope: { fade: 'global', highlight: 'item' },
            },
            {
                id: 'outer',
                innerRadius: 100,
                outerRadius: 120,
                data: data2,
                highlightScope: { fade: 'global', highlight: 'item' },
            },
        ],
        height: 300,
        hideLegend: false,
    } satisfies PieChartProps;

    return (
        <PieChart
            {...settings}
            sx={{
                [`.${pieClasses.series}[data-series="outer"] .${pieArcClasses.root}`]: {
                    opacity: 0.9,
                },
            }}
        />
    );
}
