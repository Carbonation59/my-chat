import './index.css';

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const chat = document.querySelector('.chat');
const storage = 'chatMessages';
let sender = "Вы";

function loadMessages() {
    const saved = localStorage.getItem(storage);
    return saved ? JSON.parse(saved) : [];
}

function saveMessages(messages) {
    localStorage.setItem(storage, JSON.stringify(messages));
}

function renderMessages(messages) {
    chat.innerHTML = '';

    if (messages.length === 0) {
        const emptyEl = document.createElement('div');
        emptyEl.className = 'chat-empty';
        emptyEl.textContent = 'Начните общение!';
        chat.appendChild(emptyEl);
        return;
    }

    messages.forEach(msg => {
        const el = document.createElement('div');
        el.className = `message ${msg.sender === "Вы" ? 'message--own' : 'message--other'}`;

        const textEl = document.createElement('div');
        textEl.className = 'message-text';
        textEl.textContent = msg.text;

        const metaEl = document.createElement('div');
        metaEl.className = 'message-meta';

        const date = new Date(msg.timestamp);
        const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateStr = date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
         });

        metaEl.textContent = `${msg.sender} • ${dateStr}, ${timeStr}`;
        el.appendChild(textEl);
        el.appendChild(metaEl);

        chat.appendChild(el);
    });

    chat.scrollTop = chat.scrollHeight;
}

let messages = loadMessages();
renderMessages(messages);

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text === '') {
        return;
    }
    messages.push({
        text: text,
        sender: sender,
        timestamp: Date.now()
        });

    saveMessages(messages);
    renderMessages(messages);
    input.value = '';
}

document.getElementById('switch-person').addEventListener('click', () => {
    if(sender === "Вы"){
        sender = "Дмитрий";
        return;
    }
    sender = "Вы";
});

document.getElementById('clear-chat').addEventListener('click', () => {
    localStorage.removeItem('chatMessages');
    messages = [];
    renderMessages(messages);
});
