
type Stage = {
    Component: (nextHundler: () => Promise<void>,
        backHundler: () => Promise<void>,
        finishHundler: () => Promise<void>) => JSX.Element;
    Verifyier: () => Promise<boolean>;
    Submit: () => Promise<boolean>;
}