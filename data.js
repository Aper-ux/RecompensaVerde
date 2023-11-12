Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/RecompensaVerde/master/graficas/APURAALEX2.0.csv", function(err, data) {
    // Graficar una linea de tendencia para 'COMUNES KG', PAPEL_Y_CARTON_KG, VIDRIO_KG en eje y vs 'GESTION' en eje x
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

    // Configurar el diseño del gráfico
    var configuracion = {
        title: 'Grafica de lineas de tendencia',
        xaxis: {
            title: 'TIEMPO'
        },
        yaxis: {
            title: 'RESIDUOS KG'
        }
    };

    // Dibujar el gráfico de líneas
    Plotly.newPlot('grafico1', datos, configuracion);
});

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/RecompensaVerde/master/graficas/CAKE_RECOLECCION.csv", function(err, data) {
    // Graficar una torta con COMUNES_KG,PAPEL_Y_CARTON_KG,VIDRIO_KG,METAL_KG,PLASTICOS_KG,PATOGENOS_KG,PODA_KG,ORGANICO_KG,DIFERENCIADO_PARTICULAR_KG,PAPEL_PLASTICO_KG
    var datos = [{
        values: data.map(function(d) { return d.COMUNES_KG; }),
        labels: data.map(function(d) { return d.SERIE; }),
        type: 'pie'
    }];

    // Configurar el diseño de la torta
    var configuracion = {
        title: 'Grafica de torta',
    };

    // Dibujar la torta
    Plotly.newPlot('grafico2', datos, configuracion);
});