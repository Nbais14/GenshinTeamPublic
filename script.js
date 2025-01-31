// Lista de personajes DPS
const personajesDPS = [
    "Alhaitham",
    "Arlecchino",
    "Ayaka",
    "Ayato",
    "Chasca",
    "Clorinde",
    "Dehya",
    "Diluc",
    "Eula",
    "Ganyu",
    "Hutao",
    "Itto",
    "Keqing",
    "Kinich",
    "Klee",
    "Lyney",
    "Mualani",
    "Navia",
    "Neuvillette",
    "Raiden",
    "Tartaglia",
    "Wanderer",
    "Wriothesley",
    "Xiao",
    "Yoimiya",
    "Freminet",
    "Gaming",
    "Heizou",
    "Kaveh",
    "Yanfei"
];

// Permutaciones válidas actualizadas
const permutacionesValidas = [
    // Equipos existentes
    ["Tartaglia", "Xiangling", "Bennet", "Kazuha"],
    ["Raiden", "Sara", "Kazuha", "Bennet"],
    ["Yoimiya", "Xingqiu", "Kazuha", "Bennet"],
    ["Hutao", "Xingqiu", "Sacarosa", "Bennet"],
    ["Alhaitham", "Yae", "Nahida", "Zhongli"],
    ["Alhaitham", "Xingqiu", "Raiden", "Yaoyao"],
    ["Alhaitham", "Xingqiu", "Nahida", "Kuki"],
    ["Alhaitham", "Sara", "Nahida", "Zhongli"],
    ["Alhaitham", "Yae", "Fischl", "Baizhu"],
    ["Alhaitham", "Beidou", "Nahida", "Kuki"],
    ["Alhaitham", "Nilou", "Xingqiu", "Yaoyao"],
    ["Itto", "Albedo", "Gorou", "Zhongli"],
    ["Itto", "Noelle", "Gorou", "Zhongli"],
    ["Chiori", "Itto", "Zhongli", "Gorou"],
    ["Itto", "Albedo", "Gorou", "Mona"],
    ["Itto", "Noelle", "Xiangling", "Bennet"],
    ["Arlecchino", "Citlali", "Xilonen", "Bennet"],
    ["Arlecchino", "Citlali", "Xilonen", "Kazuha"],
    ["Arlecchino", "Yelan", "Xilonen", "Bennet"],
    ["Arlecchino", "Furina", "Xilonen", "Bennet"],
    ["Arlecchino", "Xingqiu", "Bennet", "Kazuha"],
    ["Chasca", "Furina", "Yanfei", "Bennet"],
    ["Chasca", "Xilonen", "Furina", "Bennet"],
    ["Chasca", "Furina", "Layla", "Bennet"],
    ["Chasca", "Furina", "Ororon", "Bennet"],
    ["Clorinde", "Furina", "Nahida", "Baizhu"],
    ["Clorinde", "Fischl", "Xilonen", "Chiori"],
    ["Clorinde", "Fischl", "Nahida", "Kazuha"],
    ["Clorinde", "Fischl", "YunJin", "Zhongli"],
    ["Clorinde", "Fischl", "Chevruse", "Xiangling"],
    ["Cyno", "Xingqiu", "Nahida", "Thoma"],
    ["Cyno", "Beidou", "Yelan", "Xingqiu"],
    ["Cyno", "Fischl", "Nahida", "Zhongli"],
    ["Cyno", "Fischl", "Kazuha", "Zhongli"],
    ["Alhaitham", "Emilie", "Xiangling", "Bennet"],
    ["Arlecchino", "Emilie", "Zhongli", "Bennet"],
    ["Ganyu", "Emilie", "Xiangling", "Bennet"],
    ["Ayaka", "Ganyu", "Kazuha", "Xingqiu"],
    ["Ganyu", "Mona", "Diona", "Venti"],
    ["Ganyu", "Mona", "Diona", "Kazuha"],
    ["Hutao", "Xingqiu", "Kazuha", "Zhongli"],
    ["Hutao", "Yelan", "Xingqiu", "Zhongli"],
    ["Ayato", "Nahida", "Kazuha", "Kuki"],
    ["Ayato", "Yelan", "Nahida", "Thoma"],
    ["Ayato", "Kazuha", "YunJin", "Zhongli"],
    ["Kinich", "Emilie", "Xiangling", "Bennet"],
    ["Kinich", "Emilie", "Xiangling", "Yanfei"],
    ["Kinich", "Emilie", "Xiangling", "Zhongli"],
    ["Mavuika", "Ororon", "Chevruse", "Bennet"],
    ["Mavuika", "Furina", "Xilonen", "Bennet"],
    ["Mavuika", "Furina", "Citlali", "Bennet"],
    ["Mavuika", "Xilonen", "Kazuha", "Bennet"],
    ["Mualani", "Xilonen", "Xiangling", "Zhongli"],
    ["Mualani", "Kazuha", "Bennet", "Zhongli"],
    ["Mualani", "Furina", "Xilonen", "Zhongli"],
    ["Neuvillette", "Furina", "Nahida", "Raiden"],
    ["Neuvillette", "Xiangling", "Kazuha", "Bennet"],
    ["Neuvillette", "Yae", "Kazuha", "Raiden"],
    ["Kinich", "Emilie", "Xiangling", "Bennet"],
    ["Kinich", "Emilie", "Xiangling", "Yanfei"],
    ["Kinich", "Emilie", "Xiangling", "Thoma"],
    ["Kinich", "Emilie", "Xiangling", "Zhongli"],
    ["Navia", "Zhongli", "Xiangling", "Bennet"],
    ["Navia", "Zhongli", "Furina", "Bennet"],
    ["Navia", "Xiangyun", "Furina", "Chiori"],
    ["Navia", "Xilonen", "Xiangling", "Bennet"],

    // Nuevos equipos
    ["Alhaitham", "Emilie", "Xiangling", "Bennet"],
    ["Alhaitham", "Yae", "Nahida", "Zhongli"],
    ["Alhaitham", "Xingqiu", "Raiden", "Yaoyao"],
    ["Mualani", "Kachina", "Xiangling", "Zhongli"],
    ["Mualani", "Navia", "Xiangling", "Bennet"],
    ["Mualani", "Arlecchino", "Kazuha", "Bennet"],
    ["Kinich", "Emilie", "Xiangling", "Bennet"],
    ["Kinich", "Yae", "Nahida", "Zhongli"],
    ["Kinich", "Xingqiu", "Raiden", "Yaoyao"],
    ["Clorinde", "Furina", "Nahida", "Baizhu"],
    ["Clorinde", "Furina", "Yae", "Kuki"],
    ["Clorinde", "Furina", "Beidou", "Sara"],
    ["Sethos", "Kazuha", "Fischl", "Kirara"],
    ["Sethos", "Kazuha", "Yae", "Kuki"],
    ["Sethos", "Kazuha", "Beidou", "Sara"],
    ["Arlecchino", "Citlali", "Xilonen", "Bennet"],
    ["Arlecchino", "Yelan", "Zhongli", "Bennet"],
    ["Arlecchino", "Kazuha", "Xiangling", "Bennet"],
    ["Yoimiya", "Yelan", "Chiori", "Zhongli"],
    ["Yoimiya", "Xingqiu", "YunJin", "Zhongli"],
    ["Yoimiya", "Xingqiu", "Kazuha", "Bennet"],
    ["Gaming", "Ganyu", "Layla", "Xiangyun"],
    ["Gaming", "Xiangling", "Xingqiu", "Bennet"],
    ["Gaming", "Xiangling", "Kazuha", "Bennet"],
    ["Xiao", "Faruzan", "Furina", "Xiangyun"],
    ["Xiao", "Faruzan", "Bennet", "Zhongli"],
    ["Xiao", "Faruzan", "Jean", "Zhongli"],
    ["Cyno", "Chevruse", "Xiangling", "Bennet"],
    ["Cyno", "Xingqiu", "Nahida", "Thoma"],
    ["Cyno", "Nahida", "Yelan", "Kuki"],
    ["Navia", "Zhongli", "Xiangling", "Bennet"],
    ["Navia", "Kachina", "Xiangling", "Bennet"],
    ["Navia", "Arlecchino", "Kazuha", "Bennet"],
    ["Clorinde", "Furina", "Nahida", "Baizhu"],
    ["Neuvillette", "Furina", "Nahida", "Raiden"],
    ["Neuvillette", "Furina", "Kazuha", "Charlotte"],
    ["Lan Yan", "Faruzan", "Furina", "Xiangyun"],
    ["Lan Yan", "Faruzan", "Yelan", "Bennet"],
    ["Lan Yan", "Faruzan", "Xingqiu", "Bennet"],
    ["Neuvillette", "Furina", "Kazuha", "Charlotte"],
    ["Neuvillette", "Furina", "Nahida", "Raiden"],
    ["Neuvillette", "Furina", "Bennet", "Xingqiu"],
    ["Wriothesley", "Ganyu", "Ayato", "Kokomi"],
    ["Wriothesley", "Xingqiu", "Kazuha", "Bennet"],
    ["Wriothesley", "Furina", "Venti", "Mona"],
    ["Neuvillette", "Furina", "Nahida", "Raiden"],
    ["Neuvillette", "Furina", "Xingqiu", "Yelan"],
    ["Neuvillette", "Furina", "Kazuha", "Bennet"],
    ["Tartaglia", "Xiangling", "Lynette", "Bennet"],
    ["Lynette", "Neuvillette", "Xingqiu", "Kazuha"],
    ["Lynette", "Yelan", "Furina", "Jean"],
    ["Lyney", "Xiangling", "Kazuha", "Bennet"],
    ["Lyney", "Yelan", "Bennet", "Furina"],
    ["Lyney", "Xingqiu", "Zhongli", "Bennet"],
    ["Ayato", "Nahida", "Kuki", "Kirara"],
    ["Kirara", "Alhaitham", "Xingqiu", "Fischl"],
    ["Kirara", "Nahida", "Tighnari", "Baizhu"],
    ["Kaveh", "Xingqiu", "Nilou", "Nahida"],
    ["Kaveh", "Furina", "Collei", "Yaoyao"],
    ["Kaveh", "Baizhu", "Dori", "Tighnari"],
    ["Ayato", "Nilou", "Nahida", "Baizhu"],
    ["Baizhu", "Alhaitham", "Xingqiu", "Raiden"],
    ["Baizhu", "Wanderer", "Faruzan", "Furina"],
    ["Ganyu", "Dehya", "Nahida", "Bennet"],
    ["Dehya", "Xingqiu", "Bennet", "Kazuha"],
    ["Dehya", "Yelan", "Furina", "Zhongli"],
    ["Eula", "Yae", "Nahida", "Mika"],
    ["Mika", "Xingqiu", "Kazuha", "Bennet"],
    ["Mika", "Raiden", "Rosaria", "Diona"],
    ["Alhaitham", "Xingqiu", "Raiden", "Yaoyao"],
    ["Yaoyao", "Tighnari", "Furina", "Baizhu"],
    ["Yaoyao", "Nilou", "Collei", "Kaveh"],
    ["Wanderer", "Faruzan", "Xingqiu", "Bennet"],
    ["Xiao", "Faruzan", "Furina", "Xiangyun"],
    ["Faruzan", "Jean", "Venti", "Bennet"],
    ["Ayaka", "Shenhe", "Xingqiu", "Layla"],
    ["Layla", "Neuvillette", "Furina", "Bennet"],
    ["Layla", "Xingqiu", "Collei", "Baizhu"],
    ["Nahida", "Raiden", "Kuki", "Thoma"],
    ["Nahida", "Alhaitham", "Xingqiu", "Yaoyao"],
    ["Nahida", "Furina", "Neuvillette", "Baizhu"],
    ["Zhongli", "Candace", "Yelan", "Xingqiu"],
    ["Candace", "Xingqiu", "Furina", "Kazuha"],
    ["Candace", "Navia", "Bennet", "Zhongli"],
    ["Barbara", "Nilou", "Collei", "Traveler (Dendro)"],
    ["Nilou", "Nahida", "Yelan", "Baizhu"],
    ["Nilou", "Tighnari", "Furina", "Diona"],
    ["Cyno", "Xingqiu", "Nahida", "Thoma"],
    ["Cyno", "Chevruse", "Xiangling", "Bennet"],
    ["Cyno", "Raiden", "Yae", "Dori"],
    ["Raiden", "Yae", "Sara", "Dori"],
    ["Dori", "Cyno", "Nahida", "Bennet"],
    ["Dori", "Alhaitham", "Xingqiu", "Baizhu"],
    ["Kokomi", "Collei", "Raiden", "Traveler (Dendro)"],
    ["Collei", "Nilou", "Nahida", "Baizhu"],
    ["Collei", "Tighnari", "Furina", "Diona"],
    ["Tighnari", "Yae", "Nahida", "Zhongli"],
    ["Tighnari", "Alhaitham", "Xingqiu", "Yaoyao"],
    ["Tighnari", "Nilou", "Kaveh", "Baizhu"],
    ["Heizou", "Faruzan", "Yelan", "Bennet"],
    ["Heizou", "Xingqiu", "Kazuha", "Bennet"],
    ["Heizou", "Furina", "Neuvillette", "Jean"],
    ["Cyno", "Nahida", "Yelan", "Kuki"],
    ["Alhaitham", "Kuki", "Fischl", "Baizhu"],
    ["Raiden", "Nahida", "Kuki", "Thoma"],
    ["Xiao", "Faruzan", "Bennet", "Zhongli"],
    ["Xiao", "Faruzan", "Furina", "Xiangyun"],
    ["Xiao", "Jean", "Sucrose", "Bennet"],
];

const elementos = {
    // Personajes existentes
    "Tartaglia": { elemento: "Hydro", color: "#1E5C9E80" },
    "Xiangling": { elemento: "Pyro", color: "#BF2C2580" },
    "Bennet": { elemento: "Pyro", color: "#BF2C2580" },
    "Kazuha": { elemento: "Anemo", color: "#2E9E7F80" },
    "Raiden": { elemento: "Electro", color: "#7A4FA180" },
    "Sara": { elemento: "Electro", color: "#7A4FA180" },
    "Yoimiya": { elemento: "Pyro", color: "#BF2C2580" },
    "Xingqiu": { elemento: "Hydro", color: "#1E5C9E80" },
    "Hutao": { elemento: "Pyro", color: "#BF2C2580" },
    "Sacarosa": { elemento: "Anemo", color: "#2E9E7F80" },
    "Alhaitham": { elemento: "Dendro", color: "#5A9E1E80" },
    "Yae": { elemento: "Electro", color: "#7A4FA180" },
    "Nahida": { elemento: "Dendro", color: "#5A9E1E80" },
    "Zhongli": { elemento: "Geo", color: "#C5A32980" },
    "Yaoyao": { elemento: "Dendro", color: "#5A9E1E80" },
    "Kuki": { elemento: "Electro", color: "#7A4FA180" },
    "Fischl": { elemento: "Electro", color: "#7A4FA180" },
    "Baizhu": { elemento: "Dendro", color: "#5A9E1E80" },
    "Beidou": { elemento: "Electro", color: "#7A4FA180" },
    "Nilou": { elemento: "Hydro", color: "#1E5C9E80" },
    "Itto": { elemento: "Geo", color: "#C5A32980" },
    "Albedo": { elemento: "Geo", color: "#C5A32980" },
    "Gorou": { elemento: "Geo", color: "#C5A32980" },
    "Noelle": { elemento: "Geo", color: "#C5A32980" },
    "Mona": { elemento: "Hydro", color: "#1E5C9E80" },
    "Arlecchino": { elemento: "Pyro", color: "#BF2C2580" },
    "Citlali": { elemento: "Cryo", color: "#6FB2C180" },
    "Xilonen": { elemento: "Geo", color: "#C5A32980" },
    "Furina": { elemento: "Hydro", color: "#1E5C9E80" },
    "Yelan": { elemento: "Hydro", color: "#1E5C9E80" },
    "Chevruse": { elemento: "Pyro", color: "#BF2C2580" },
    "Thoma": { elemento: "Pyro", color: "#BF2C2580" },
    "YunJin": { elemento: "Geo", color: "#C5A32980" },
    "Emilie": { elemento: "Dendro", color: "#5A9E1E80" },
    "Ganyu": { elemento: "Cryo", color: "#6FB2C180" },
    "Ayaka": { elemento: "Cryo", color: "#6FB2C180" },
    "Diona": { elemento: "Cryo", color: "#6FB2C180" },
    "Venti": { elemento: "Anemo", color: "#2E9E7F80" },
    "Ayato": { elemento: "Hydro", color: "#1E5C9E80" },
    "Kinich": { elemento: "Dendro", color: "#5A9E1E80" },
    "Mavuika": { elemento: "Pyro", color: "#BF2C2580" },
    "Ororon": { elemento: "Electro", color: "#7A4FA180" },
    "Mualani": { elemento: "Hydro", color: "#1E5C9E80" },
    "Neuvillette": { elemento: "Hydro", color: "#1E5C9E80" },
    "Navia": { elemento: "Geo", color: "#C5A32980" },
    "Chiori": { elemento: "Geo", color: "#C5A32980" },
    "Xiangyun": { elemento: "Anemo", color: "#2E9E7F80" },
    "Layla": { elemento: "Cryo", color: "#6FB2C180" },
    "Chasca": { elemento: "Anemo", color: "#2E9E7F80" },
    "Clorinde": { elemento: "Electro", color: "#7A4FA180" },
    "Cyno": { elemento: "Electro", color: "#7A4FA180" },
    "Yanfei": { elemento: "Pyro", color: "#BF2C2580" },

    // Nuevos personajes
    "Barbara": { elemento: "Hydro", color: "#1E5C9E80" },
    "Candace": { elemento: "Hydro", color: "#1E5C9E80" },
    "Charlotte": { elemento: "Cryo", color: "#6FB2C180" },
    "Collei": { elemento: "Dendro", color: "#5A9E1E80" },
    "Dehya": { elemento: "Pyro", color: "#BF2C2580" },
    "Dori": { elemento: "Electro", color: "#7A4FA180" },
    "Eula": { elemento: "Cryo", color: "#6FB2C180" },
    "Faruzan": { elemento: "Anemo", color: "#2E9E7F80" },
    "Gaming": { elemento: "Pyro", color: "#BF2C2580" },
    "Heizou": { elemento: "Anemo", color: "#2E9E7F80" },
    "Jean": { elemento: "Anemo", color: "#2E9E7F80" },
    "Kachina": { elemento: "Pyro", color: "#BF2C2580" },
    "Kaveh": { elemento: "Dendro", color: "#5A9E1E80" },
    "Kirara": { elemento: "Dendro", color: "#5A9E1E80" },
    "Kokomi": { elemento: "Hydro", color: "#1E5C9E80" },
    "Lan Yan": { elemento: "Anemo", color: "#2E9E7F80" },
    "Lynette": { elemento: "Anemo", color: "#2E9E7F80" },
    "Lyney": { elemento: "Pyro", color: "#BF2C2580" },
    "Mika": { elemento: "Cryo", color: "#6FB2C180" },
    "Rosaria": { elemento: "Cryo", color: "#6FB2C180" },
    "Sethos": { elemento: "Electro", color: "#7A4FA180" },
    "Shenhe": { elemento: "Cryo", color: "#6FB2C180" },
    "Sucrose": { elemento: "Anemo", color: "#2E9E7F80" },
    "Tighnari": { elemento: "Dendro", color: "#5A9E1E80" },
    "Traveler (Dendro)": { elemento: "Dendro", color: "#5A9E1E80" },
    "Wanderer": { elemento: "Anemo", color: "#2E9E7F80" },
    "Wriothesley": { elemento: "Cryo", color: "#6FB2C180" },
    "Xiao": { elemento: "Anemo", color: "#2E9E7F80" },
};

// Extraer y ordenar personajes elegibles alfabéticamente
const personajesElegibles = [...new Set(permutacionesValidas.flat())].sort();

// Cargar personajes en la interfaz
const listaPersonajes = document.getElementById("lista-personajes");
const filtroElemento = document.getElementById("filtro-elemento");

function cargarPersonajes(filtro = "todos") {
    listaPersonajes.innerHTML = ""; // Limpiar lista actual
    personajesElegibles.forEach(nombre => {
        const personaje = elementos[nombre];
        if (filtro === "todos" || personaje.elemento === filtro) {
            const divPersonaje = document.createElement("label");
            divPersonaje.className = "personaje";
            divPersonaje.style.backgroundColor = personaje.color;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "personaje";
            checkbox.value = nombre;

            const span = document.createElement("span");
            span.textContent = nombre;

            divPersonaje.appendChild(checkbox);
            divPersonaje.appendChild(span);
            listaPersonajes.appendChild(divPersonaje);
        }
    });
}

// Manejar el cambio en el filtro de elementos
filtroElemento.addEventListener("change", () => {
    const filtro = filtroElemento.value;
    cargarPersonajes(filtro);
});

// Cargar personajes inicialmente
cargarPersonajes();

// Función para encontrar equipos válidos
function encontrarEquiposValidos(permutaciones, seleccionados) {
    return permutaciones.filter(equipo => equipo.every(personaje => seleccionados.includes(personaje)));
}

// Manejar el clic en el botón "Generar Equipos Válidos"
document.getElementById("generar-equipos").addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[name="personaje"]:checked');
    const personajesSeleccionados = Array.from(checkboxes).map(cb => cb.value);
    const equiposValidos = encontrarEquiposValidos(permutacionesValidas, personajesSeleccionados);

    const mejoresEquipos = [];
    const otrosEquipos = [];

    equiposValidos.forEach(equipo => {
        if (personajesDPS.includes(equipo[0])) {
            mejoresEquipos.push(equipo);
        } else {
            otrosEquipos.push(equipo);
        }
    });

    // Mostrar mejores equipos
    const listaMejoresEquipos = document.getElementById("mejores-equipos");
    listaMejoresEquipos.innerHTML = "";
    if (mejoresEquipos.length === 0) {
        listaMejoresEquipos.innerHTML = "<li>No hay mejores equipos con los personajes seleccionados.</li>";
    } else {
        mejoresEquipos.forEach(equipo => {
            const li = document.createElement("li");
            li.textContent = `Equipo: ${equipo.join(", ")}`;
            listaMejoresEquipos.appendChild(li);
        });
    }

    // Mostrar otros equipos
    const listaOtrosEquipos = document.getElementById("otros-equipos");
    listaOtrosEquipos.innerHTML = "";
    if (otrosEquipos.length === 0) {
        listaOtrosEquipos.innerHTML = "<li>No hay otros equipos con los personajes seleccionados.</li>";
    } else {
        otrosEquipos.forEach(equipo => {
            const li = document.createElement("li");
            li.textContent = `Equipo: ${equipo.join(", ")}`;
            listaOtrosEquipos.appendChild(li);
        });
    }
});