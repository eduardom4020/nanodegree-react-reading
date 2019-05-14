export const redirectTo = (path, history) => (
    history.push(path)
);

export const clickRedirectTo = (path, history) => event => (
    redirectTo(path, history)
);

export const undo = (history) => (
    history.goBack()
);

export const redo = (history) => (
    history.goForward()
);

export const getFromPath = (path, history, pos=null) => {
    const tokens = history.location.pathname.split('/');
    const toGet = pos != null ? pos : tokens.length - 1;
    return tokens[toGet];
};