// src/components/MailboxDetails/MailboxDetails.jsx

const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);
