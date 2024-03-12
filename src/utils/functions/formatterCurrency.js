export function formatterCurrency(value) {
    return '$' + (new Intl.NumberFormat('es-CO').format(value));
}