import translate from 'translate';
translate.engine = 'google';

function obtenerNodosTexto(elemento) {
  const nodos = [];
  const walker = document.createTreeWalker(
    elemento,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        return node.nodeValue !== ''
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    }
  );
  let nodo;
  while ((nodo = walker.nextNode())) {
    nodos.push(nodo);
  }
  return nodos;
}

async function traducirPagina(idiomaDestino) {
  const elementos = document.querySelectorAll('h1, h2, h3, p, li, figcaption, button, a, label, span');

  if (elementos.length === 0) {
    console.warn("No se encontró texto para traducir.");
    return;
  }

  for (let elemento of elementos) {
    const nodosTexto = obtenerNodosTexto(elemento);

    for (let nodo of nodosTexto) {
      if (!nodo._original) {
        nodo._original = nodo.nodeValue;
      }

      if (idiomaDestino === 'es') {
        nodo.nodeValue = nodo._original;
      } else {
        if (!nodo._original.trim()) {
          continue;
        }
        try {
          const textoTraducido = await translate(nodo._original.trim(), {
            from: 'es',
            to: idiomaDestino
          });
          const espacioInicio = nodo._original.match(/^\s*/)[0];
          const espacioFinal = nodo._original.match(/\s*$/)[0];
          nodo.nodeValue = espacioInicio + textoTraducido + espacioFinal;

        } catch (error) {
          console.error("Error traduciendo nodo:", error);
        }
      }
    }
  }
}

const btnEn = document.getElementById('boton__en');
const btnEs = document.getElementById('boton__es');

if (btnEn) btnEn.addEventListener('click', () => traducirPagina('en'));
if (btnEs) btnEs.addEventListener('click', () => traducirPagina('es'));

export { traducirPagina };