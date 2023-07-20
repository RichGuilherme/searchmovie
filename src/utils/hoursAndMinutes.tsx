export const HoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    if (hours === 0){
        return `${minutes > 0 ? ` ${minutes}m` : ""}`
    } else{
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`
    }
}