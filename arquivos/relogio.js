var Agora = new Date();

var hora = parseInt(
    Agora.toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        hour12: false
    })
);

console.log("Agora são exatamente " + hora + " horas.");

if (hora <= 12) {
    console.log("Tenha um ótimo dia");
} else if (hora <= 18) {
    console.log("Tenha uma ótima tarde");
} else {
    console.log("Tenha uma ótima noite");
}
