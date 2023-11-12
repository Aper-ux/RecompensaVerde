Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/RecompensaVerde/master/graficas/residuos.csv", function(err, data) {
    // Graficar una linea de tendencia 'COMUNES KG' en eje y vs 'GESTION' en eje x
    var datos = [{
      x: data.map(function(d) { return d.GESTION; }),
      y: data.map(function(d) { return d.PAPEL_Y_CARTON_KG	; }),
      type: 'scatter',
      mode: 'lines',
      line: {
        color: 'rgb(219, 64, 82)',
        width: 3
      }
    }];

    // Configurar el diseño del gráfico
    var configuracion = {
        title: 'Grafica de lineas de tendencia',
        xaxis: {
            title: 'GESTION'
        },
        yaxis: {
            title: 'COMUNES_KG'
        }
    };

    // Dibujar el gráfico de líneas
    Plotly.newPlot('grafico1', datos, configuracion);
});





Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
  // Calcular la cantidad de estudiantes en cada categoría de ataques de pánico
  var conteo = {};
  data.forEach(function(d) {
    var categoria = d.panic_attack;
    if (!conteo[categoria]) {
      conteo[categoria] = 0;
    }
    conteo[categoria]++;
  });

  // Preparar los datos para el gráfico de pastel
  var datos = [{
    labels: Object.keys(conteo),
    values: Object.values(conteo),
    type: 'pie',
    marker: {
      colors: ['lime', 'yellow']
    }
  }];

  // Configurar el diseño del gráfico
  var configuracion = {
    title: 'Distribución de casos ataques de pánico',
  };

  // Dibujar el gráfico de pastel
  Plotly.newPlot('grafico2', datos, configuracion);
});

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
  // Calcular la cantidad de estudiantes en cada categoría de ansiedad
  var conteo = {};
  data.forEach(function(d) {
    var categoria = d.anxiety;
    if (!conteo[categoria]) {
      conteo[categoria] = 0;
    }
    conteo[categoria]++;
  });

  // Preparar los datos para el gráfico de pastel
  var datos = [{
    labels: Object.keys(conteo),
    values: Object.values(conteo),
    type: 'pie',
    marker: {
      colors: ['yellow', 'orange']
    }
  }];

  // Configurar el diseño del gráfico
  var configuracion = {
    title: 'Distribución de casos de ansiedad',
  };

  // Dibujar el gráfico de pastel
  Plotly.newPlot('grafico3', datos, configuracion);
});

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
  // Calcular la cantidad de estudiantes en cada categoría de depresión
  var conteo = {};
  data.forEach(function(d) {
    var categoria = d.depression;
    if (!conteo[categoria]) {
      conteo[categoria] = 0;
    }
    conteo[categoria]++;
  });

  // Preparar los datos para el gráfico de pastel
  var datos = [{
    labels: Object.keys(conteo),
    values: Object.values(conteo),
    type: 'pie',
    marker: {
      colors: ['green', 'yellow', 'red', 'orange']
    }
  }];

  // Configurar el diseño del gráfico
  var configuracion = {
    title: 'Distribución de casos de depresión',
  };

  // Dibujar el gráfico de pastel
  Plotly.newPlot('grafico4', datos, configuracion);
});

// Carga los datos del archivo CSV
Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {

  // Filtra los estudiantes con depresión
  var estudiantesDepresion = data.filter(function(d) {
    return d.depression === 'Yes';
  });

  // Filtra los estudiantes con ansiedad
  var estudiantesAnsiedad = data.filter(function(d) {
    return d.anxiety === 'Yes';
  });

  // Filtra los estudiantes con ataques de pánico
  var estudiantesAtaquesPanico = data.filter(function(d) {
    return d.panic_attack === 'Yes';
  });

  // Agrupar estudiantes con depresión por género y contar la cantidad de estudiantes en cada género
  var agrupacionDepresion = agruparPorGenero(estudiantesDepresion);

  // Agrupar estudiantes con ansiedad por género y contar la cantidad de estudiantes en cada género
  var agrupacionAnsiedad = agruparPorGenero(estudiantesAnsiedad);

  // Agrupar estudiantes con ataques de pánico por género y contar la cantidad de estudiantes en cada género
  var agrupacionAtaquesPanico = agruparPorGenero(estudiantesAtaquesPanico);

  // Preparar los datos para el gráfico de barras
  var datos = [
    {
      x: Object.keys(agrupacionDepresion),
      y: Object.values(agrupacionDepresion),
      type: 'bar',
      name: 'Depresión'
    },
    {
      x: Object.keys(agrupacionAnsiedad),
      y: Object.values(agrupacionAnsiedad),
      type: 'bar',
      name: 'Ansiedad'
    },
    {
      x: Object.keys(agrupacionAtaquesPanico),
      y: Object.values(agrupacionAtaquesPanico),
      type: 'bar',
      name: 'Ataques de Pánico'
    }
  ];

  // Configurar el diseño del gráfico
  var configuracion = {
    title: 'Estudiantes con problemas de salud mental por género',
    xaxis: {
      title: 'Género'
    },
    yaxis: {
      title: 'Cantidad de estudiantes'
    },
    barmode: 'group'
  };

  // Dibujar el gráfico de barras combinado
  Plotly.newPlot('grafico5', datos, configuracion);

});

// Función auxiliar para agrupar estudiantes por género y contar la cantidad de estudiantes en cada género
function agruparPorGenero(estudiantes) {
  var agrupacion = {
    'Male': 0,
    'Female': 0
  };
  estudiantes.forEach(function(d) {
    var genero = d.gender;
    if (agrupacion.hasOwnProperty(genero)) {
      agrupacion[genero]++;
    }
  });
  return agrupacion;
}


    
Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
    // Agrupar estudiantes por año de estudio y contar la cantidad de estudiantes con depresión en cada año
    var agrupacion = {};
    data.forEach(function(d) {
        var añoEstudio = d.year_study;
        if (!agrupacion[añoEstudio]) {
        agrupacion[añoEstudio] = 0;
        }
        if (d.depression === 'Yes') {
        agrupacion[añoEstudio]++;
        }
    });

    // Preparar los datos para el gráfico de línea
    var datos = [{
        x: Object.keys(agrupacion),
        y: Object.values(agrupacion),
        type: 'scatter',
        mode: 'lines',
        line: {
          color: 'rgb(200, 80, 150)',
          width: 3
        }
    }];

    // Configurar el diseño del gráfico
    var configuracion = {
        title: 'Estudiantes con depresión por año de estudio',
        xaxis: {
        title: 'Año de estudio'
        },
        yaxis: {
        title: 'Cantidad de estudiantes con depresión'
        }
    };
  
    // Dibujar el gráfico de barras
    Plotly.newPlot('grafico6', datos, configuracion);
  });
      
Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
    // Agrupar estudiantes por año de estudio y contar la cantidad de estudiantes con ansiedad en cada año
    var agrupacion = {};
    data.forEach(function(d) {
        var añoEstudio = d.year_study;
        if (!agrupacion[añoEstudio]) {
        agrupacion[añoEstudio] = 0;
        }
        if (d.anxiety === 'Yes') {
        agrupacion[añoEstudio]++;
        }
    });

    // Preparar los datos para el gráfico de línea
    var datos = [{
        x: Object.keys(agrupacion),
        y: Object.values(agrupacion),
        type: 'scatter',
        mode: 'lines',
        line: {
          color: 'rgb(100, 64, 82)',
          width: 3
        }
    }];

    // Configurar el diseño del gráfico
    var configuracion = {
        title: 'Estudiantes con ansiedad por año de estudio',
        xaxis: {
        title: 'Año de estudio'
        },
        yaxis: {
        title: 'Cantidad de estudiantes con ansiedad'
        }
    };
  
    // Dibujar el gráfico de barras
    Plotly.newPlot('grafico7', datos, configuracion);
  });
  
Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
    // Agrupar estudiantes por año de estudio y contar la cantidad de estudiantes con ataques de panico en cada año
    var agrupacion = {};
    data.forEach(function(d) {
        var añoEstudio = d.year_study;
        if (!agrupacion[añoEstudio]) {
        agrupacion[añoEstudio] = 0;
        }
        if (d.panic_attack === 'Yes') {
        agrupacion[añoEstudio]++;
        }
    });

    // Preparar los datos para el gráfico de línea
    var datos = [{
        x: Object.keys(agrupacion),
        y: Object.values(agrupacion),
        type: 'scatter',
        mode: 'lines',
        line: {
            color: 'rgb(219, 64, 82)',
            width: 3
          }
    }];

    // Configurar el diseño del gráfico
    var configuracion = {
        title: 'Estudiantes con ataques de panico por año de estudio',
        xaxis: {
        title: 'Año de estudio'
        },
        yaxis: {
        title: 'Cantidad de estudiantes con ataques de panico'
        }
    };
  
    // Dibujar el gráfico de barras
    Plotly.newPlot('grafico8', datos, configuracion);
  });
  
Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
  // Agrupar estudiantes por año de estudio y contar la cantidad de estudiantes con depresión en cada año
  var agrupacionDepresion = {};
  var agrupacionAnsiedad = {};
  var agrupacionAtaquesPanico = {};
  
  data.forEach(function(d) {
    var añoEstudio = d.year_study;
    
    if (!agrupacionDepresion[añoEstudio]) {
      agrupacionDepresion[añoEstudio] = 0;
    }
    
    if (!agrupacionAnsiedad[añoEstudio]) {
      agrupacionAnsiedad[añoEstudio] = 0;
    }
    
    if (!agrupacionAtaquesPanico[añoEstudio]) {
      agrupacionAtaquesPanico[añoEstudio] = 0;
    }
    
    if (d.depression === 'Yes') {
      agrupacionDepresion[añoEstudio]++;
    }
    
    if (d.anxiety === 'Yes') {
      agrupacionAnsiedad[añoEstudio]++;
    }
    
    if (d.panic_attack === 'Yes') {
      agrupacionAtaquesPanico[añoEstudio]++;
    }
  });

  // Preparar los datos para las tres líneas de tendencia
  var datos = [
    {
      x: Object.keys(agrupacionDepresion),
      y: Object.values(agrupacionDepresion),
      name: 'Depresión',
      type: 'scatter',
      mode: 'lines',
      line: {
        color: 'rgb(200, 80, 150)',
        width: 3
      }
    },
    {
      x: Object.keys(agrupacionAnsiedad),
      y: Object.values(agrupacionAnsiedad),
      name: 'Ansiedad',
      type: 'scatter',
      mode: 'lines',
      line: {
        color: 'rgb(100, 64, 82)',
        width: 3
      }
    },
    {
      x: Object.keys(agrupacionAtaquesPanico),
      y: Object.values(agrupacionAtaquesPanico),
      name: 'Ataques de Pánico',
      type: 'scatter',
      mode: 'lines',
      line: {
        color: 'rgb(219, 64, 82)',
        width: 3
      }
    }
  ];

  // Configurar el diseño del gráfico
  var configuracion = {
    title: 'Estudiantes con trastornos mentales por año de estudio',
    xaxis: {
      title: 'Año de estudio'
    },
    yaxis: {
      title: 'Cantidad de estudiantes'
    }
  };

  // Dibujar el gráfico de líneas
  Plotly.newPlot('grafico9', datos, configuracion);
});


// Carga los datos del archivo CSV
Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {

  // Agrupar estudiantes por carrera y contar la cantidad de estudiantes en cada carrera
  var agrupacion = {};
  data.forEach(function(d) {
    var carrera = d.course;
    if (!agrupacion[carrera]) {
      agrupacion[carrera] = 0;
    }
    agrupacion[carrera]++;
  });

  // Preparar los datos para el gráfico de bubble chart
  var datos = [];
  Object.keys(agrupacion).forEach(function(carrera) {
    datos.push({
      x: [carrera],
      y: [agrupacion[carrera]],
      mode: 'markers',
      marker: {
        size: Math.sqrt(agrupacion[carrera]) * 10,
        color: carrera,
        colorscale: 'Rainbow',
        sizemode: 'diameter'
      },
      text: [carrera],  // Se define como un array de strings
      hovertemplate: 'Carrera: %{text}<br>Cantidad de estudiantes: %{y}<extra></extra>'
    });
  });

  // Configurar el diseño del gráfico
  var configuracion = {
    title: 'Densidad de estudiantes por carrera',
    xaxis: {
      title: 'Carrera'
    },
    yaxis: {
      title: 'Cantidad de estudiantes'
    },
    showlegend: false
  };

  // Dibujar el gráfico de bubble chart
  Plotly.newPlot('grafico10', datos, configuracion);

});
// Carga los datos del archivo CSV
Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {

  // Filtra los estudiantes con depresión
  var estudiantesDepresion = data.filter(function(d) {
    return d.depression === 'Yes';
  });

  // Filtra los estudiantes con ansiedad
  var estudiantesAnsiedad = data.filter(function(d) {
    return d.anxiety === 'Yes';
  });

  // Filtra los estudiantes con ataques de pánico
  var estudiantesAtaquesPanico = data.filter(function(d) {
    return d.panic_attack === 'Yes';
  });

  // Agrupar estudiantes con depresión por carrera y contar la cantidad de estudiantes en cada carrera
  var agrupacionDepresion = agruparPorCarrera(estudiantesDepresion);

  // Agrupar estudiantes con ansiedad por carrera y contar la cantidad de estudiantes en cada carrera
  var agrupacionAnsiedad = agruparPorCarrera(estudiantesAnsiedad);

  // Agrupar estudiantes con ataques de pánico por carrera y contar la cantidad de estudiantes en cada carrera
  var agrupacionAtaquesPanico = agruparPorCarrera(estudiantesAtaquesPanico);

  // Preparar los datos para el gráfico de barras
  var datos = [
    {
      x: Object.keys(agrupacionDepresion),
      y: Object.values(agrupacionDepresion),
      type: 'bar',
      name: 'Depresión'
    },
    {
      x: Object.keys(agrupacionAnsiedad),
      y: Object.values(agrupacionAnsiedad),
      type: 'bar',
      name: 'Ansiedad'
    },
    {
      x: Object.keys(agrupacionAtaquesPanico),
      y: Object.values(agrupacionAtaquesPanico),
      type: 'bar',
      name: 'Ataques de Pánico'
    }
  ];

  // Configurar el diseño del gráfico
  var configuracion = {
    title: 'Estudiantes con problemas de salud mental por carrera',
    xaxis: {
      title: 'Carrera'
    },
    yaxis: {
      title: 'Cantidad de estudiantes'
    },
    barmode: 'group'
  };

  // Dibujar el gráfico de barras combinado
  Plotly.newPlot('grafico11', datos, configuracion);

});

// Función auxiliar para agrupar estudiantes por carrera y contar la cantidad de estudiantes en cada carrera
function agruparPorCarrera(estudiantes) {
  var agrupacion = {};
  estudiantes.forEach(function(d) {
    var carrera = d.course;
    if (!agrupacion[carrera]) {
      agrupacion[carrera] = 0;
    }
    agrupacion[carrera]++;
  });
  return agrupacion;
}

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {

  // Agrupar estudiantes por edad y género y contar la cantidad de estudiantes con problemas mentales en cada grupo
  var agrupacion = {};
  data.forEach(function(d) {
    var edadGenero = d.Age + '-' + d.gender;
    if (!agrupacion[edadGenero]) {
      agrupacion[edadGenero] = {
        depression: 0,
        anxiety: 0,
        panic_attack: 0
      };
    }
    if (d.depression === 'Yes') {
      agrupacion[edadGenero].depression++;
    }
    if (d.anxiety === 'Yes') {
      agrupacion[edadGenero].anxiety++;
    }
    if (d.panic_attack === 'Yes') {
      agrupacion[edadGenero].panic_attack++;
    }
  });

  // Preparar los datos para el gráfico de barras agrupadas
  var edades = Object.keys(agrupacion);
  var generos = ['Male', 'Female'];
  var datos = [];
  
  generos.forEach(function(genero) {
    var valoresDepresion = [];
    var valoresAnsiedad = [];
    var valoresAtaquesPanico = [];
    
    edades.forEach(function(edad) {
      var valores = agrupacion[edad];
      valoresDepresion.push(valores.depression);
      valoresAnsiedad.push(valores.anxiety);
      valoresAtaquesPanico.push(valores.panic_attack);
    });
    
    datos.push({
      x: edades,
      y: (genero === 'Male') ? valoresDepresion : valoresAnsiedad,
      type: 'bar',
      name: (genero === 'Male') ? 'Depresión' : 'Ansiedad'
    });
    
    datos.push({
      x: edades,
      y: valoresAtaquesPanico,
      type: 'bar',
      name: 'Ataques de pánico'
    });
  });

  // Configurar el diseño del gráfico
  var configuracion = {
    title: 'Estudiantes con problemas mentales por edad y género',
    xaxis: {
      title: 'Edad y Género'
    },
    yaxis: {
      title: 'Cantidad de estudiantes'
    },
    barmode: 'group'
  };

  // Dibujar el gráfico de barras agrupadas
  Plotly.newPlot('grafico12', datos, configuracion);

});