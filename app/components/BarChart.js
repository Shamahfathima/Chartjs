"use client"
import { useRef, useEffect} from "react";
import { Chart } from "chart.js/auto";

export default function BarChart(){
    const chartRef = useRef(null)

    useEffect(() => {
        if(chartRef.current){
            if(chartRef.current.chart){
                chartRef.current.chart.destroy()
            }

            const context = chartRef.current.getContext("2d");

            const newChart = new Chart(context, {
                type: "bar",
                data: {
                    labels: ["John", "Jane", "Doe"],
                    datasets:[
                        {
                            label: "Info",
                            data:[34, 64, 23],
                            backgroundColor: [
                                "rgb(255, 99, 132 , 0.2)", // Light Red
                                "rgb(255, 159, 64 , 0.2)", // Orange
                                "rgb(255, 205, 86 , 0.2)", // Yellow
                                "rgb(75, 192, 192 , 0.2)", // Teal
                                "rgb(54, 162, 235 , 0.2)", // Blue
                                "rgb(153, 102, 255, 0.2)", // Purple
                                "rgb(201, 203, 207, 0.2)" // Light Gray
                            ],
                            borderColor:[
                                "rgb(255, 99, 132)", // Light Red
                                "rgb(255, 159, 64)", // Orange
                                "rgb(255, 205, 86)", // Yellow
                                "rgb(75, 192, 192)", // Teal
                                "rgb(54, 162, 235)", // Blue
                                "rgb(153, 102, 255)", // Purple
                                "rgb(201, 203, 207)" // Light Gray
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    // responsive: true
                    scales: {
                        x:{
                            type: "category"
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            chartRef.current.chart = newChart
        }
    }, []);
    return (
        <div style={{ position: "relative", width: "90vw", height: "80vh" }}> 
            <canvas ref={chartRef} />
        </div>
    );
    
}