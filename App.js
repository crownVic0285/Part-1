function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Victor" />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
