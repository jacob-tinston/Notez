import { v4 as uuidv4 } from 'uuid';

export const formatDate = (date) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    let formattedDate = date.toLocaleDateString("en", options);
    formattedDate = formattedDate.replace(/,/g, '');
    return formattedDate;
}

export const getInitialState = () => {
    const initial = JSON.stringify([
        {
          id: uuidv4(),
          title: 'Shopping List',
          content: '- Eggs - Milk - Milk - Bread - Oranges',
          date: formatDate(new Date())
        },
        {
            id: uuidv4(),
            title: 'Todo',
            content: '- Pick kids up - Go to hairdressers - Food Shop',
            date: formatDate(new Date())
        },
        {
            id: uuidv4(),
            title: 'Email',
            content: 'Dear Judith, I hope this email finds you well.',
            date: formatDate(new Date())
        },
        {
            id: uuidv4(),
            title: 'Shopping List',
            content: '- Eggs - Milk - Milk - Bread - Oranges',
            date: formatDate(new Date())
        },
        {
            id: uuidv4(),
            title: 'Todo',
            content: '- Pick kids up - Go to hairdressers - Food Shop',
            date: formatDate(new Date())
        },
        {
            id: uuidv4(),
            title: 'Email',
            content: 'Dear Judith, I hope this email finds you well.',
            date: formatDate(new Date())
        },
    ]);

    if (! localStorage.getItem("notes")) {
        localStorage.setItem("notes", initial);
        localStorage.getItem("notes");
    }

    return JSON.parse(localStorage.getItem("notes"));
}
