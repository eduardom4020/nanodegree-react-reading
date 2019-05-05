export const getFromPath = (pos=null) => {
    const tokens = window.location.pathname.split('/');
    const toGet = pos != null ? pos : tokens.length - 1;
    return tokens[toGet];
}