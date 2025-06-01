// jest-global-mocks.ts
Object.defineProperty(globalThis, 'window', {
    value: globalThis,
    writable: true,
});

globalThis.global = globalThis;
globalThis.console = console;
globalThis.process = process;
/* Mock localStorage
Object.defineProperty(window, 'localStorage', {
    value: {
        getItem: jest.fn().mockReturnValue(null),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
    },
    writable: true,
});

// Mock sessionStorage
Object.defineProperty(window, 'sessionStorage', {
    value: {
        getItem: jest.fn().mockReturnValue(null),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
    },
    writable: true,
});

// Mock navigator.clipboard
Object.defineProperty(navigator, 'clipboard', {
    value: {
        writeText: jest.fn(),
        readText: jest.fn().mockResolvedValue(''),
    },
    writable: true,
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }),
    writable: true,
});*/