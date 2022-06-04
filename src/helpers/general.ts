export const firstLetterToUpperCase = (value: string): string => {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export const formatNumber = (number: number): string => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
