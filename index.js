const { useState, useEffect } = React;

function MenuItem({ item }) {
    return React.createElement('div', {
        className: 'bg-white p-8 rounded-2xl shadow-sm border-t-4 border-orange-500 animate-fade-in'
    }, 
        React.createElement('div', { className: 'text-4xl mb-4' }, item.emoji),
        React.createElement('h3', { className: 'text-xl font-bold mb-2' }, item.title),
        React.createElement('p', { className: 'text-gray-600' }, item.description)
    );
}

function Menu() {
    const [menuItems, setMenuItems] = useState([
        { id: 1, emoji: '🍕', title: 'بيتزا طازجة', description: 'أجود أنواع البيتزا بمكونات طازجة يومياً.' },
        { id: 2, emoji: '🌮', title: 'ساندوتشات متنوعة', description: 'تشكيلة واسعة من الساندوتشات والتاكوس.' },
        { id: 3, emoji: '🍔', title: 'برجر باحجام مختلفة', description: 'اشهى برجر باحجام مختلفة حسب رغبتكم' }
    ]);

    return React.createElement('section', { className: 'py-16 container mx-auto px-6', id: 'menu' },
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 text-center' },
            menuItems.map(item => React.createElement(MenuItem, { key: item.id, item: item }))
        )
    );
}

function Gallery() {
    const [images, setImages] = useState([
        './imgg/OIP (1).webp',
        './imgg/OIP (2).webp',
        './imgg/OIP.webp',
        './imgg/télécharger (1).webp',
        './imgg/télécharger (2).webp',
        './imgg/OIP (3).webp'
    ]);

    return React.createElement('section', { className: 'py-16 bg-gray-100' },
        React.createElement('div', { className: 'container mx-auto px-6' },
            React.createElement('h2', { className: 'text-3xl font-bold text-center mb-8' }, 'معرض الصور'),
            React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
                images.map((src, index) => React.createElement('img', {
                    key: index,
                    src: src,
                    alt: 'Food',
                    className: 'rounded-lg shadow-lg animate-slide-up'
                }))
            )
        )
    );
}

function App() {
    return React.createElement('div', null,
        React.createElement(Menu),
        React.createElement(Gallery)
    );
}

const rootMenu = ReactDOM.createRoot(document.getElementById('menu-section'));
rootMenu.render(React.createElement(Menu));

const rootGallery = ReactDOM.createRoot(document.getElementById('gallery-section'));
rootGallery.render(React.createElement(Gallery));
