import "./blog.css"
import type {StoryCardObject} from "../Types/types"
import stories from "../Data/storyCardData"
import StoryCard from "../Components/StoryCard/StoryCard"

function Blog () {
    return (
        <div className="blog-background">
            <div className="blog-container">
                {stories.map((story: StoryCardObject, index: number) => (
                    <StoryCard story={story} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Blog