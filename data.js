Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/RecompensaVerde/master/graficas/APURAALEX2.0.csv", function(err, data) {
    var datos = [
        {
            x: data.map(function(d) { return d.SERIE; }),
            y: data.map(function(d) { return d.COMUNES_KG; }),
            type: 'scatter',
            mode: 'lines',
            name: 'COMUNES_KG',
            line: {
                color: 'BLACK',
                width: 3
            }
        },
        {
            x: data.map(function(d) { return d.SERIE; }),
            y: data.map(function(d) { return d.PAPEL_Y_CARTON_KG; }),
            type: 'scatter',
            mode: 'lines',
            name: 'PAPEL_Y_CARTON_KG',
            line: {
                color: 'BLUE',
                width: 3
            }
        },
        {
            x: data.map(function(d) { return d.SERIE; }),
            y: data.map(function(d) { return d.VIDRIO_KG; }),
            type: 'scatter',
            mode: 'lines',
            name: 'VIDRIO_KG',
            line: {
                color: 'GREY',
                width: 3
            }
        },
        {
            x: data.map(function(d) { return d.SERIE; }),
            y: data.map(function(d) { return d.METAL_KG; }),
            type: 'scatter',
            mode: 'lines',
            name: 'METAL_KG',
            line: {
                color: 'BLACK',
                width: 3
            }
        },
        {
            x: data.map(function(d) { return d.SERIE; }),
            y: data.map(function(d) { return d.PLASTICOS_KG; }),
            type: 'scatter',
            mode: 'lines',
            name: 'PLASTICOS_KG',
            line: {
                color: 'YELLOW',
                width: 3
            }
        },
        {
            x: data.map(function(d) { return d.SERIE; }),
            y: data.map(function(d) { return d.PATOGENOS_KG; }),
            type: 'scatter',
            mode: 'lines',
            name: 'PATOGENOS_KG',
            line: {
                color: 'RED',
                width: 3
            }
        },
        {
            x: data.map(function(d) { return d.SERIE; }),
            y: data.map(function(d) { return d.PODA_KG; }),
            type: 'scatter',
            mode: 'lines',
            name: 'PODA_KG',
            line: {
                color: 'GREEN',
                width: 3
            }
        },
        {
            x: data.map(function(d) { return d.SERIE; }),
            y: data.map(function(d) { return d.ORGANICOS_KG; }),
            type: 'scatter',
            mode: 'lines',
            name: 'ORGANICOS_KG',
            line: {
                color: 'LIME',
                width: 3
            }
        },
        {
            x: data.map(function(d) { return d.SERIE; }),
            y: data.map(function(d) { return d.DIFERENCIADO_PARTICULAR_KG; }),
            type: 'scatter',
            mode: 'lines',
            name: 'DIFERENCIADO_PARTICULAR_KG',
            line: {
                color: 'PURPLE',
                width: 3
            }
        },
        {
            x: data.map(function(d) { return d.SERIE; }),
            y: data.map(function(d) { return d.PAPEL_PLASTICO_KG; }),
            type: 'scatter',
            mode: 'lines',
            name: 'PAPEL_PLASTICO_KG',
            line: {
                color: 'ORANGE',
                width: 3
            }
        },
    ];

    var configuracion = {
        title: 'Grafica de lineas de tendencia',
        xaxis: {
            title: 'TIEMPO'
        },
        yaxis: {
            title: 'RESIDUOS KG'
        }
    };

    Plotly.newPlot('grafico1', datos, configuracion);
});

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/RecompensaVerde/master/graficas/CAKE_RECOLECCION.csv", function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    var categorias = Object.keys(data[0]);
    var valores = Object.values(data[0]);

    var datos = [{
        values: valores,
        labels: categorias,
        type: 'pie'
    }];

    var configuracion = {
        title: 'Grafica de torta'
    };

    Plotly.newPlot('grafico2', datos, configuracion);
});

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/RecompensaVerde/master/graficas/PREDICCION_AZUL_MES.csv", function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    var datos = [{
        x: data.map(function(d) { return d.Mes; }),
        y: data.map(function(d) { return d.Toneladas; }),
        type: 'scatter',
        mode: 'lines',
        name: 'PREDICCION',
        line: {
            color: 'BLUE',
            width: 3
        }
    }];

    var configuracion = {
        title: 'Grafica de lineas de tendencia',
        xaxis: {
            title: 'MES'
        },
        yaxis: {
            title: 'RESIDUOS KG'
        }
    };

/*     Plotly.newPlot('grafico3', datos, configuracion);
 */});

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/RecompensaVerde/master/graficas/PREDICCION_ROJO_MES.csv", function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    var datos = [{
        x: data.map(function(d) { return d.Mes; }),
        y: data.map(function(d) { return d.Toneladas; }),
        type: 'scatter',
        mode: 'lines',
        name: 'PREDICCION',
        line: {
            color: 'RED',
            width: 3
        }
    }];

    var configuracion = {
        title: 'Grafica de lineas de tendencia',
        xaxis: {
            title: 'MES'
        },
        yaxis: {
            title: 'RESIDUOS KG'
        }
    };

/*     Plotly.newPlot('grafico4', datos, configuracion);
 */});

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/RecompensaVerde/master/graficas/PREDICCION_COMBINADA.csv", function(err, data) {
    var datos = [
        {
            x: data.map(function(d) { return d.Mes; }),
            y: data.map(function(d) { return d.Toneladas; }),
            type: 'scatter',
            mode: 'dotted',
            name: 'Prediccion',
            line: {
                color: 'red',
                width: 3
            }
        },
        {
            x: data.map(function(d) { return d.Mes_b; }),
            y: data.map(function(d) { return d.Toneladas_b; }),
            type: 'scatter',
            mode: 'lines',
            name: 'Sin prediccion',
            line: {
                color: 'blue',
                width: 3
            }
        }
    ];

    var configuracion = {
        title: 'Grafica de lineas de tendencia',
        xaxis: {
            title: 'TIEMPO'
        },
        yaxis: {
            title: 'RESIDUOS KG'
        }
    };

    Plotly.newPlot('grafico3', datos, configuracion);
});

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/RecompensaVerde/master/graficas/HIST.csv", function(err, data) {
    //make an histogram horizontal with AÑO vs TOTAL_TON_reciclados and TOTAL_TON_comunes
    
    var datos = [
        {
            x: data.map(function(d) { return d.AÑO; }),
            y: data.map(function(d) { return d.TOTAL_TON_reciclados; }),
            type: 'bar',
            name: 'Reciclados',
            marker: {
                color: 'blue'
            }
        },
        {
            x: data.map(function(d) { return d.AÑO; }),
            y: data.map(function(d) { return d.TOTAL_TON_comunes; }),
            type: 'bar',
            name: 'Comunes',
            marker: {
                color: 'purple'
            }
        }
    ];

    var configuracion = {
        title: 'Grafica de barras',
        xaxis: {
            title: 'AÑO'
        },
        yaxis: {
            title: 'RESIDUOS KG'
        }
    };

    Plotly.newPlot('grafico4', datos, configuracion);
});

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/RecompensaVerde/master/graficas/HIST.csv", function(err, data) {
    //make an histogram horizontal with AÑO vs TOTAL_TON_reciclados and TOTAL_TON_comunes
    
    var datos = [
        {
            x: data.map(function(d) { return d.AÑO; }),
            y: data.map(function(d) { return d.Ton_CO2_eq_residuos_reciclados; }),
            type: 'bar',
            name: 'Reciclados',
            marker: {
                color: 'blue'
            }
        },
        {
            x: data.map(function(d) { return d.AÑO; }),
            y: data.map(function(d) { return d.Ton_CO2_eq_residuos_comunes; }),
            type: 'bar',
            name: 'Comunes',
            marker: {
                color: 'purple'
            }
        }
    ];

    var configuracion = {
        title: 'Grafica de barras',
        xaxis: {
            title: 'AÑO'
        },
        yaxis: {
            title: 'RESIDUOS KG'
        }
    };

    Plotly.newPlot('grafico5', datos, configuracion);
});