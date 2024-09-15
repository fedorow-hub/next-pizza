export interface Story
{
    id: number
    previewImageUrl: string
    storyItems: StoryItem[]
}

export interface StoryItem{
    id: number
    sourceUrl: string
}