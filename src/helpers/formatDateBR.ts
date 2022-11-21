export default function (date: Date){
    return new Intl.DateTimeFormat("pt-BR", {
        timeZone: "UTC"
    }).format(date)
}