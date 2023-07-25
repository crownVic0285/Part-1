function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Victor" />
        </div>
    );
}

ReactDom.render(<App />, document.getElementById('root'));
