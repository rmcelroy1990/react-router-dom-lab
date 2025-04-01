import { useState } from 'react';

const MailboxForm = ({ addBox }) => {
    const [boxSize, setBoxSize] = useState('');
    const [boxOwner, setBoxOwner] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMailbox = { boxSize, boxOwner };
        addBox(newMailbox);

        setBoxSize('');
        setBoxOwner('');
    };

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Box Size:</label>
            <input
                type="text"
                value={boxSize}
                onChange={(e) => setBoxSize(e.target.value)}
            />
        </div>
        <div>
            <label>Box Owner:</label>
            <input 
                type="text"
                value={boxOwner}
                onChange={(e) => setBoxOwner(e.target.value)}
                />
        </div>
        <button type="submit">Add Mailbox</button>
    </form>
);
};

export default MailboxForm