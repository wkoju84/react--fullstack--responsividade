export interface RecordResponse{
    content: Record[]
}

export interface Record {
    id: number,
    service: string,
    customer: string,
    location: string,
    dateTime: string
}