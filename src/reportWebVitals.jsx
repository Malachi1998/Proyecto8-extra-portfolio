import 'web-vitals'; //importamos el paquete de funcionalidades descargadas. Ese paquete viene del archivo reportWebVitals.jsx

const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  }; //Esta configuración permite realizar un seguimiento e informar sobre las métricas principales de rendimiento web en una aplicación React.
  
  export default reportWebVitals;