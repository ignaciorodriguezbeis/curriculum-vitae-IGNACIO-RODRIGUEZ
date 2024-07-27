// Selecciona todos los enlaces en el documento
const enlaces = document.querySelectorAll('a');

// Itera sobre cada enlace y añade el atributo target="_blank"
enlaces.forEach(enlace => {
  enlace.setAttribute('target', '_blank');
});
