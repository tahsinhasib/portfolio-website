import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

type PieData = {
    id: number;
    value: number;
    label: string;
};

export default function BasicPie({ data }: { data: PieData[] }) {
    return (
        <PieChart
            series={[
                {
                    data,
                },
            ]}
            width={300}
            height={300}
        />
    );
}
