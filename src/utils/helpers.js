import { v4 as uuidv4 } from 'uuid';

export const formatDate = (date) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    let formattedDate = date.toLocaleDateString("en", options);
    formattedDate = formattedDate.replace(/,/g, '');
    return formattedDate;
}

export const getInitialState = () => {
    localStorage.removeItem("notes")
    const initial = JSON.stringify([
        {
          id: uuidv4(),
          title: 'Shopping List',
          content: 'Test',
          date: formatDate(new Date())
        }
    ]);

    if (! localStorage.getItem("notes")) {
        localStorage.setItem("notes", initial);
        localStorage.getItem("notes");
    }

    return JSON.parse(localStorage.getItem("notes"));
}
