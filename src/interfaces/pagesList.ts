export interface Page{
    name: string;
    path: string;
}

export interface PageList {
    pages: Page[];
}

export interface PageMetadata{
    title: string,
    description: string,
    
}