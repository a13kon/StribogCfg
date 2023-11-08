const videos = [
    {
        name: 'Video 1',
        duration: 15,
        id:1,
    },
    {
        name: 'Video 2',
        duration: 17,
        id:2,
    },
    {
        name: 'Video 3',
        duration: 10,
        id:3,
    }
]

export function VideoList () {
    return (
        <>
            <h1>Video List</h1>
            {
                videos.map((video) => {
                    return (
                        <div key ={video.id}>
                            <p>{video.name}</p>
                            <p>{video.duration}</p>
                            <button>Like!</button>
                        </div>
                    )
                } )
            }
        </>
    )
}