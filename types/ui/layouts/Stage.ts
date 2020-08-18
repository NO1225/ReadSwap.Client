
type Stage = {
    Component: (nextHundler: () => void,
        backHundler: () => void,
        finishHundler: () => void) => JSX.Element;
    Verifyier: () => Promise<boolean>;
    Submit: () => Promise<boolean>;
}