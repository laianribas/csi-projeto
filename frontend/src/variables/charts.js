export const barChartData = [{
    name: 'Sales',
    data: [330, 250, 110, 300, 490, 350, 270, 130, 425]
}]

export const barChartOptions = {
    chart: {
        toolbar: {
            show: false
        }
    },
    tooltip: {
        style: {
            backgroundColor: 'red',
            fontSize: '12px',
            fontFamily: undefined
        },
        onDatasetHover: {
            style: {
                backgroundColor: 'red',
                fontSize: '12px',
                fontFamily: undefined
            }
        },
        theme: 'dark'
    },
    xaxis: {
        categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        show: false,
        labels: {
            show: true,
            style: {
                colors: '#fff',
                fontSize: '12px'
            }
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        show: true,
        color: '#fff',
        labels: {
            show: true,
            style: {
                colors: '#fff',
                fontSize: '14px'
            }
        }
    },
    grid: {
        show: false
    },
    fill: {
        colors: '#fff'
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
            borderRadius: 8,
            columnWidth: '12px'
        }
    },
    responsive: [{
        breakpoint: 768,
        options: {
            plotOptions: {
                bar: {
                    borderRadius: 0
                }
            }
        }
    }]
}

export const lineChartData = [{
        name: 'DCEN-IT',
        data: [12, 0, 5, 9, 4, 2, 1, 2, 6]
    },
    {
        name: 'SEAV-IT',
        data: [9, 0, 0, 4, 5, 1, 2, 7, 9]
    },
    {
        name: 'DCHEL',
        data: [2, 4, 0, 5, 11, 1, 4, 7, 5]
    },
    {
        name: 'BS-IT',
        data: [5, 6, 1, 0, 4, 10, 4, 0, 5]
    },
    {
        name: 'SSC-IT',
        data: [4, 5, 4, 5, 2, 7, 0, 4, 8]
    },
    {
        name: 'PRAE-IT',
        data: [6, 1, 5, 2, 2, 3, 2, 0, 4]
    },
    {
        name: 'UINFOR-IT',
        data: [7, 2, 4, 0, 1, 6, 5, 2, 1]
    }
]

export const lineChartOptions = {
    chart: {
        toolbar: {
            show: false
        }
    },
    tooltip: {
        theme: 'dark'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        labels: {
            style: {
                colors: '#c8cfca',
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#c8cfca',
                fontSize: '12px'
            }
        }
    },
    legend: {
        show: true,
        labels: {
            colors: '#c8cfca'
        },
        position: `bottom`
    },
    grid: {
        strokeDashArray: 5
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: []
        },
        colors: [
            '#B794F4',
            '#D53F8C',
            `#E53E3E`,
            `#521B41`,
            `#44337A`,
            `#00B5D8`,
            `#38A169`
        ]
    },
    colors: [
        '#B794F4',
        '#D53F8C',
        `#E53E3E`,
        `#FAF089`,
        `#F6AD55`,
        `#00B5D8`,
        `#38A169`
    ]
}

export const pieChartDataCharts1 = [41, 37, 39, 38, 39, 25, 28]

export const pieChartOptionsCharts1 = {
    labels: [
        'DECEN-IT',
        'SEAV-IT',
        'DCHEL',
        'BS-IT',
        'SSC-IT',
        'PRAE-IT',
        'UINFOR-IT'
    ],
    colors: [
        '#D6BCFA',
        '#B794F4',
        '#9F7AEA',
        '#805AD5',
        '#6B46C1',
        '#553C9A',
        '#44337A'
    ],
    chart: {
        width: '100%'
    },
    states: {
        hover: {
            filter: {
                type: 'none'
            }
        }
    },
    legend: {
        show: true,
        labels: {
            colors: '#c8cfca'
        },
        position: `left`
    },
    noData: {
        text: 'Não há dados a serem exibidos!',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
            color: '#c8cfca',
            fontSize: '14px',
            fontFamily: undefined
        }
    },
    dataLabels: {
        enabled: false
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false
                }
            }
        }
    },
    fill: {
        colors: [
            '#D6BCFA',
            '#B794F4',
            '#9F7AEA',
            '#805AD5',
            '#6B46C1',
            '#553C9A',
            '#44337A'
        ]
    },
    tooltip: {
        enabled: true,
        theme: 'dark'
    }
}