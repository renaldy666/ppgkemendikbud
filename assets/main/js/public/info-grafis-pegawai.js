$(document).ready(function () {
    const multipleChecklistType = "multiple-checklist";
    let answers = [];
    let finalAnswers = [];
    var pieColors = (function () {
        var colors = [],
            base = Highcharts.getOptions().colors[0],
            i;
        for (i = 0; i < 10; i += 1) {
            colors.push(
                Highcharts.color(base)
                    .brighten((i - 3) / 7)
                    .get()
            );
        }
        return colors;
    })();

    Highcharts.chart(`infografis-1`, {
        title: {
            text: "",
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        exporting: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
                    distance: -60,
                    color: "white",
                    filter: {
                        property: "percentage",
                        operator: ">",
                        value: 4,
                    },
                },
                showInLegend: true,
            },
        },
        series: [
            {
                type: "pie",
                allowPointSelect: true,
                name: [""],
                keys: ["name", "y", "selected", "sliced"],
                data: [
                    ["Laki-Laki", 24, false],
                    ["Perempuan", 37, false],
                ],
            },
        ],
        legend: {
            enabled: true,
        },
        credits: {
            enabled: false,
        },
    });

    Highcharts.chart(`infografis-2`, {
        title: {
            text: "",
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        exporting: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
                    distance: -60,
                    color: "white",
                    filter: {
                        property: "percentage",
                        operator: ">",
                        value: 4,
                    },
                },
                showInLegend: true,
            },
        },
        series: [
            {
                type: "pie",
                allowPointSelect: true,
                name: [""],
                keys: ["name", "y", "selected", "sliced"],
                data: [
                    ["20 - 25", 4, false],
                    ["26 - 30", 3, false],
                    ["31 - 35", 5, false],
                    ["36 - 40", 13, false],
                    ["41 - 45", 14, false],
                    ["45 - 50", 10, false],
                    ["51 - 55", 12, false],
                    ["56 - 60", 1, false],
                ],
            },
        ],
        legend: {
            enabled: true,
        },
        credits: {
            enabled: false,
        },
    });

    Highcharts.chart("infografis-3", {
        chart: {
            type: "column",
        },
        title: {
            text: "",
        },
        xAxis: {
            categories: ["PNS", "PPNPN"],
            crosshair: true,
        },
        yAxis: {
            min: 0,
            title: {
                text: "Jumlah",
            },
        },
        tooltip: {
            headerFormat:
                '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} orang</b></td></tr>',
            footerFormat: "</table>",
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
                name: "Laki-laki",
                data: [34, 9],
            },
            {
                name: "Perempuan",
                data: [41, 6],
            },
        ],
        credits: {
            enabled: false,
        },
    });
});
