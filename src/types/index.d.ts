export interface Info {
    name: string;
    title: string;
    pitch: string;
    contacts: { [key: string]: string };
}

export interface About {
    paragraphs?: string[];
    stack?: string[];
}

export interface Experience {
    title: string;
    company: string;
    link?: string;
    setup?: string;
    location?: string;
    startYear: number;
    endYear?: number;
    description?: string[];
    stack?: string[];
}

export interface Project {
    title: string;
    image?: string;
    imageBgColorClass?: string;
    year?: number;
    description?: string;
    stack?: string[];
    link?: string;
}

export interface Achievement {
    title: string;
    description?: string;
    date?: string;
    images?: string[];
}

export interface Setup {
    os: string;
    editor: string;
    terminal: string;
    browser: string;
    panel: string;
    windowManager: string;
    appLauncher: string;
    shell: string;
    current: string[];
    past: Array<{
        image: string;
        imageFull?: string;
    }>;
}