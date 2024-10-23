document.addEventListener('DOMContentLoaded', function() {
    const alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    const tipoCount = { visual: 0, auditivo: 0, kinestesico: 0 };

    // Contar los tipos de aprendizaje
    alumnos.forEach(alumno => {
        if (tipoCount[alumno.tipo_aprendizaje] !== undefined) {
            tipoCount[alumno.tipo_aprendizaje]++;
        }
    });

    // Generar recomendaciones
    let recomendaciones = "Recomendaciones para tu clase: ";

    if (tipoCount.visual > 0 && tipoCount.auditivo > 0 && tipoCount.kinestesico > 0) {
        recomendaciones += "Considera combinar materiales visuales, actividades auditivas y ejercicios kinestésicos para atender a todos los estilos de aprendizaje.";
    } else if (tipoCount.visual > 0 && tipoCount.auditivo > 0) {
        recomendaciones += "Usa gráficos y videos junto con discusiones en grupo para maximizar el aprendizaje.";
    } else if (tipoCount.visual > 0 && tipoCount.kinestesico > 0) {
        recomendaciones += "Incluye materiales visuales y actividades prácticas para facilitar el aprendizaje.";
    } else if (tipoCount.auditivo > 0 && tipoCount.kinestesico > 0) {
        recomendaciones += "Realiza discusiones interactivas y juegos prácticos para involucrar a todos.";
    } else if (tipoCount.visual > 0) {
        recomendaciones += "Utiliza gráficos, imágenes y videos para mejorar la comprensión visual.";
    } else if (tipoCount.auditivo > 0) {
        recomendaciones += "Incorpora debates, discusiones y recursos de audio para enriquecer el aprendizaje auditivo.";
    } else if (tipoCount.kinestesico > 0) {
        recomendaciones += "Ofrece actividades prácticas y juegos para facilitar el aprendizaje kinestésico.";
    } else {
        recomendaciones += "No hay recomendaciones disponibles ya que no se han ingresado alumnos.";
    }

    // Mostrar recomendaciones
    const recomendacionesDiv = document.getElementById('resultado-recomendaciones');
    recomendacionesDiv.innerHTML = `<p>${recomendaciones}</p>`;
});


