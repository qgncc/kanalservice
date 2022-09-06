import useFetch from "./useFetch";

interface User{
    id: number,
    name: string,
    company:{
        name: string
    }
}
interface Post{
    userId: number,
    id: number,
    title: string,
    body: string
}

interface PostExtended extends Post{
    photo: Photo,
    user: User,
}

interface Photo{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export default function useFetchPosts(){
    const {data:users, error: usersError} = useFetch<User[]>("https://jsonplaceholder.typicode.com/users")
    const {data:posts, error: postsError} = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts")
    const {data:photos, error: photosError} = useFetch<Photo[]>("https://jsonplaceholder.typicode.com/photos")
    
    if(usersError || postsError || photosError){
        return {error: usersError || postsError || photosError, data: null}
    }
    
    const pickedPosts:PostExtended[] = [];
    if(!users || !posts || !photos) return {error: undefined, data: undefined};
    for(const user of users){
        const post = posts.find((post)=>post.userId === user.id)
        const photo = photos.find((photo)=>photo.albumId === user.id)
        let postEsxtended: PostExtended;
        if(post && photo){
            postEsxtended = Object.assign(post, {photo, user})
            pickedPosts.push(postEsxtended)
        }
    }
    return {error: undefined, data:pickedPosts}
}