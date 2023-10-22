import { useEffect, useRef, useState } from 'react';
import './HourlyChart.scss';
import { HourlyForecastTypes, LinePlotTypes } from '../../resources/interfaces';
import { Card } from '..'
import * as d3 from 'd3';

const HourlyChart = ({ hourlyWeather },
    { width = 450,
        height = 400,
        marginTop = 20,
        marginRight = 20,
        marginBottom = 20,
        marginLeft = 20 }) => {

    const getHourlyTemp = (hourly) => {
        const hourlyTemps = []
        hourly.forEach(currentHour => {
            hourlyTemps.push(currentHour.temp)
        })
        return hourlyTemps
    }

    const getTimes = (hourly) => {
        const hourlyTimes = []
        hourly.forEach(currentHour => {
            hourlyTimes.push(currentHour.time)
        })
        return hourlyTimes
    }

    const gx = useRef();
    const gy = useRef();

    const next12hours = hourlyWeather.slice(0, 13)
    const hourlyTemps = getHourlyTemp(next12hours)
    const hourlyTimes = getTimes(next12hours)

    const x = d3.scaleLinear([0, 12], [marginLeft, width - marginRight]);
    const y = d3.scaleLinear(d3.extent(hourlyTemps), [height - marginBottom, marginTop]);
    const line = d3.line((d, i) => x(i), y);
    useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
    useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);

    return (
        <Card>
            <svg width={width} height={height}>
                <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
                <g ref={gy} transform={`translate(${marginLeft},0)`} />
                <path fill="none" stroke="currentColor" stroke-width="1.5" d={line(hourlyTemps)} />
                {/* <g fill="white" stroke="currentColor" stroke-width="1.5">
                    {hourlyWeather.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
                </g> */}
            </svg>
        </Card>
    )
}

export default HourlyChart;
