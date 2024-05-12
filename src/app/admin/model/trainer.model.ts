

export interface Trainer{
    id:{value:string},
    username:string,
    birthDate:string,
    experience:number,
    specialization:string,
    phone:string,
    email:string
    image:string
}

export interface PostUpdateTrainer{
    id:string,
    username:string,
    birthDate:string,
    experience:number,
    specialization:string,
    phone:string,
    email:string
    image:File
}

export interface PostCreateTrainer{
    username:string,
    birthDate:string,
    experience:number,
    specialization:string,
    phone:string,
    email:string
    image:File
}