function App() {
    return (
        <div>
            <Tweet
                icon=""
                displayName="A"
                accountName="AAA"
                content="Hello"
            />
            <Tweet
                icon=""
                displayName="B"
                accountName="BBB"
                content="Good"
            />
        </div>
    );
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);