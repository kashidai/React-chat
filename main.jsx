function App() {

    const [tweets, setTweets] = React.useState([
        {
            id: 0,
            icon: '',
            displayName: 'A',
            accountName: 'aaaaaa',
            content: 'Hello'
        },
        {
            id: 1,
            icon: '',
            displayName: 'B',
            accountName: 'bbbbbb',
            content: 'Good'
        }
    ]);

    const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);

    return (
        <div>
            <TweetInput addTweet={addTweet}/>
            <Timeline tweets={tweets}/>
        </div>
    );
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);