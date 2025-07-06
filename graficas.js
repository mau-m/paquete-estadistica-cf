const { CharJSNodeCanvas } = requiere('chartjs-node-canvas');
const fs = require('fs');

const width = 800;
const height = 600;
const charJSNodeCanvas = new CharJSNodeCanvas({ width, height });

async function generarGrafico(nombreArchivo, labels, data) {
    const configuration = {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Datos',
                data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }]
        }
    };

    const image = await charJSNodeCanvas.renderToBuffer(configuration);
    fs.writeFileSync(nombreArchivo, image)
}

module.exports = { generarGrafico }
