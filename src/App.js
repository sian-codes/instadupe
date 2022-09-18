import './App.css';
import HeaderView from "./layout/Header";
import StoryContainer from "./view/StoryContainer";
import Post from "./view/Post"

function App() {
  return (
    <div className="App">
      <HeaderView className="App-header">
      </HeaderView>
        <section className="container-story">
      <StoryContainer className="story-container">
      </StoryContainer>
            <section className="container-post">
            <Post className="post-container">
            </Post>
            </section>
        </section>
    </div>
  );
}

export default App;
