
export function ConflitError(){
    return {
        name: "ConflitError",
        message: "This model already exist!"
    }
}

export function NotFoundError(){
    return {
        name: "NotFoundError",
        message: "No car result for this search!"
    }
}