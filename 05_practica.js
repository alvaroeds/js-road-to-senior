// En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

// Recibirás un array de objetos que incluirán las siguientes propiedades:

// name: nombre del gatito.
// followers: un array de números, donde cada uno representa los seguidores de cada red social.
// Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.


data = [
    {
      name: "Mimi",
      followers: [320, 120, 70]
    },
    {
      name: "Milo",
      followers: [400, 300, 100, 200]
    },
    {
      name: "Gizmo",
      followers: [250, 750]
    }
];
   
    // Tu código aquí 👈
    let catsWinners = [];
    let maxWinner = 0;
    for (const element of cats) {
        const suma = element.followers.reduce(function (acumulador, numero) {
            return acumulador + numero;
        }, 0);
        if (suma > maxWinner) {
            catsWinners = [];
            catsWinners.push(element.name);
            maxWinner = suma;
        } else if (suma === maxWinner) {
            catsWinners.push(element.name);
        };
        console.log(catsWinners);
    };
    return catsWinners;
}

findFamousCats_Tradicional(data)

function findFamousCats_Tradicional2(cats) {
    // Paso 1: Calcular la suma de seguidores para cada gatito
    const sumFollowCats = cats.map(function(cat) {
        return {
            name: cat.name, 
            totalFollowers: cat.followers.reduce(function (acumulador, numero) {
                return acumulador + numero;
            }, 0)
        }
    });

    // Paso 2: Encontrar el número máximo de seguidores y filtrar gatos
    let maxFollowers = 0;
    let famousCats = [];
    for (const cat of sumFollowCats) {
        if (cat.totalFollowers > maxFollowers) {
            famousCats = [];
            maxFollowers = cat.totalFollowers;
            famousCats.push(cat.name);
        } else if (cat.totalFollowers === maxFollowers) {
            famousCats.push(cat.name);
        }
        console.log(famousCats)
    }


    return famousCats;
}
findFamousCats_Tradicional2(data)
  
function findFamousCats_Mejorado(cats) {
    // Paso 1: Encuentra el número máximo de seguidores
    let maxnum = 0
    const sumFollowCats = cats.map(cat => {
        let total = cat.followers.reduce((acc, followers) => acc + followers, 0)
        if (total > maxnum) {
            maxnum = total
        };
        return {
            name: cat.name,
            followers: total
        };
    })
    
    // Paso 2: Encuentra los nombres de los gatitos que tienen el número máximo de seguidores
    const famousCats = sumFollowCats.filter(cat => cat.followers === maxnum).map(cat => cat.name);


    console.log(famousCats)
    return famousCats;
}
findFamousCats_Mejorado(data)


function findFamousCats_Mejorado2(cats) {
    // Paso 1: Calcular la suma de seguidores para cada gato
    const catsWithTotalFollowers = cats.map(cat => ({
    name: cat.name,
    totalFollowers: cat.followers.reduce((acc, followers) => acc + followers, 0)
    }));

    // Paso 2: Encontrar el número máximo de seguidores
    const maxFollowers = Math.max(...catsWithTotalFollowers.map(cat => cat.totalFollowers));

    // Paso 3: Filtrar los gatos que tienen el número máximo de seguidores y extraer sus nombres
    const famousCatsNames = catsWithTotalFollowers
    .filter(cat => cat.totalFollowers === maxFollowers)
    .map(cat => cat.name);

    console.log(famousCatsNames)
    return famousCatsNames;
}
findFamousCats_Mejorado2(data)