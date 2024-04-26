import { insertarJson } from './sendData.js';
// Función para interpretar los comandos de voz
export function interpretCommand(result) {
    result = result.replace(".", "");
    result = result.replace(",", "");
    //Definicion de elementos a modificar en el programa
    const orderResultDiv = document.getElementById('orderResult');
    const controlTexto = document.getElementById("texto");
    if (result.includes("lima")){
        
      

            //Visita Google al decir "Abre google"
            if (result.includes("abrir google")){
                orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                insertarJson("Visitar Google");
                window.open('https://www.google.com/');
            }
            if (result.includes("busca morat")){
                orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                insertarJson("Buscar morat");
                window.open('https://www.google.com/search?q=morat&sca_esv=5d0811d5ae0715ef&ei=wScrZuOpIafawN4Pp-yIgAU&ved=0ahUKEwijjoT7_96FAxUnLdAFHSc2AlAQ4dUDCBA&uact=5&oq=morat&gs_lp=Egxnd3Mtd2l6LXNlcnAiBW1vcmF0Mg0QLhiABBixAxhDGIoFMg0QLhiABBixAxhDGIoFMggQABiABBixAzIFEAAYgAQyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQMyChAAGIAEGEMYigUyCBAAGIAEGLEDMgUQABiABDIcEC4YgAQYsQMYQxiKBRiXBRjcBBjeBBjgBNgBA0iHGFCGCFivFHAEeAGQAQCYAVigAakDqgEBNbgBA8gBAPgBAZgCCaAC5wOoAhTCAgoQABiwAxjWBBhHwgIdEAAYgAQYtAIY1AMY5QIYtwMYigUY6gIYigPYAQHCAh0QLhiABBi0AhjUAxjlAhi3AxiKBRjqAhiKA9gBAcICFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQLCAhYQLhgDGLQCGOUCGOoCGIwDGI8B2AECwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQABiABBixAxiDAcICChAuGIAEGEMYigXCAhAQLhiABBixAxhDGNQCGIoFwgILEC4YgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICIBAuGIAEGLEDGNEDGIMBGMcBGJcFGNwEGN4EGOAE2AEDwgINEAAYgAQYsQMYQxiKBcICCxAuGIAEGMcBGK8BwgIIEC4YgAQYsQPCAhAQLhiABBixAxhDGIMBGIoFwgILEC4YgAQYsQMY1AKYAwmIBgGQBgi6BgQIARgHugYGCAIQARgKugYGCAMQARgUkgcBOaAHrlE&sclient=gws-wiz-serp');
            }

            //Crea una pestaña nueva en el navegador
            if (result.includes("abre netflix") || result.includes("abre netflix")){
                orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                insertarJson("Abrir nueva pestaña y abrir netflix");
                window.open('https://www.netflix.com/mx/');

               
            }
            if (result.includes("abre pachuca")){
                orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                insertarJson("Abrir nueva pestaña y abrir sii");
                window.open('http://sii.itpachuca.edu.mx/');
               
            }

           

        



        

          

            /* else {
                orderResultDiv.innerHTML = `<p>Orden desconocida, intenta de nuevo</p>`;
            } */
        

    }
}