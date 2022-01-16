export const capitalize = (string) => {
    if(!string) return
    const str = string.trim().toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1)
};

export const truncate = (string) => {
    if(!string) return
    const str = string.trim();
    if (str.length > 77) return `${str.substring(0, 78)}...`
    return str
}