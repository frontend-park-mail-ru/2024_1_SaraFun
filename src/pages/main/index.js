import './index.css'; 

const MainPage = (root) => {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Main Page Content</h1>'; 
    root.appendChild(element);
    return element;
};

export default MainPage;
